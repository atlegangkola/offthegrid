'use client'
import Image, { StaticImageData } from 'next/image'
import './scss/style.scss';
import styles from './page.module.css'
import './css/style.css';
import './css/bootstrap.min.css';
import './css/tiny-slider.css';
import './css/style.scss';
import {products} from './products';
import couch from './images/couch.png';
import user from './images/user.svg';
import cart from './images/cart.svg';
import cross from './images/cross.svg';
import product1 from './images/product-1.png';
import product2 from './images/product-2.png';
import product3 from './images/product-3.png';
import truck from './images/truck.svg';
import bag from './images/bag.svg';
import support from './images/support.svg';
import returns from './images/return.svg';
import whychooseus from './images/why-choose-us-img.jpg';
import imggrid1 from './images/img-grid-1.jpg';
import imggrid2 from './images/img-grid-2.jpg';
import imggrid3 from './images/img-grid-3.jpg';
import person1 from './images/person-1.png';
import post1 from './images/post-1.jpg';
import post2 from './images/post-2.jpg';
import post3 from './images/post-3.jpg';
import sofa from './images/sofa.png';
import envelope from './images/envelope-outline.svg';
import house from './images/house_bg.png';
import s_image1 from './images/s-image1.jpg';
import { useState } from "react";

export default function Home() {

const [_products, setProducts] = useState<IProduct[]>([]);

interface IProduct{
  id:string,
  img: StaticImageData,
  title: string,
  description:string,
  price: number,
  quantity:number
}


function AddToCart(product:IProduct){

  const hasProduct = _products.filter(x=>x.id == product.id);
  
  if(hasProduct.length>0){
    //product is in the cart, increase quantity
    const currentProducts = _products.filter(x=>x.id!=product.id);
    const newProductWithUpdatedQuantity = {
        ...hasProduct[0],
        quantity: hasProduct[0].quantity +1
      };
      const newProducts =[...currentProducts, newProductWithUpdatedQuantity] as IProduct[];
      setProducts(newProducts);
      console.log("PRODUCTS-1", _products)
  }else{
    //product is not in the card - add quantity =1
    const productToAdd = {
      ...product,
      quantity:1
    }
    
    const newProducts = [..._products, productToAdd] as IProduct[];
    setProducts(newProducts);
    console.log("PRODUCTS-2", _products)

    
  }
  localStorage.setItem('myData', JSON.stringify(_products));
}





  return (
    <>
  {/* Start Header/Navigation */}
  <nav
    className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark"
    arial-label="Furni navigation bar"
  >
    <div className="container">
      <a className="navbar-brand" href="index.html">
        Off The Grid<span>.</span>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarsFurni"
        aria-controls="navbarsFurni"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarsFurni">
        <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
          <li className="nav-item active">
            <a className="nav-link" href="index.html">
              Home
            </a>
          </li>
          <li>
            <a className="nav-link" href="shop.html">
              Shop
            </a>
          </li>
          <li>
            <a className="nav-link" href="about.html">
              About us
            </a>
          </li>
          <li>
            <a className="nav-link" href="services.html">
              Services
            </a>
          </li>
          <li>
            <a className="nav-link" href="blog.html">
              Blog
            </a>
          </li>
          <li>
            <a className="nav-link" href="contact.html">
              Contact us
            </a>
          </li>
        </ul>
        <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
          <li>
            <a className="nav-link" href="#">
              <Image alt='' src={user} />
            </a>
          </li>
          <li>
            <a className="nav-link" href="cart.html">
              <Image alt='' src={cart} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  

  {/* End Header/Navigation */}
  {/* Start Hero Section */}
  <div className="hero">
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-lg-5">
          <div className="intro-excerpt">
            <h1>
            Explore Our<span className="d-block">Solar Solutions</span>
            </h1>
            <p className="mb-4">
            Discover a brighter future with our cutting-edge solar products, designed to power homes, businesses, and communities sustainably.
            </p>
            <p>
              <a href="" className="btn btn-secondary me-2">
                Shop Now
              </a>
              <a href="#" className="btn btn-white-outline">
                Explore
              </a>
            </p>
          </div>
        </div>
        <div className="col-lg-7">
          <div className="hero-img-wrap">
            <Image alt='couch' src={house} height={700} className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End Hero Section */}
  {/* Start Product Section */}
  <div className="product-section">
    <div className="container">
      <div className="row">
        {/* Start Column 1 */}
        <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
          <h2 className="mb-4 section-title">
            Crafted with excellent material.
          </h2>
          <p className="mb-4">
            Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
            velit. Aliquam vulputate velit imperdiet dolor tempor tristique.{" "}
          </p>
          <p>
            <a href="shop.html" className="btn">
              Explore
            </a>
          </p>
        </div>
        
        {/* End Column 1 */}
        {/* Start Column 2 */}

        {products.map((product, index) => {

          return(
  <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0" key={index}>
    <a className="product-item">
      <Image
        src={product.img} // Make sure product.img contains a valid image URL
        alt='product'
        width={400}
        height={400}
        className="img-fluid product-thumbnail"
      />
      <h3 className="product-title">{product.title}</h3>
      <strong className="product-price">R {product.price}</strong>
      <span className="icon-cross" onClick={()=>AddToCart(product as IProduct)}>
        <Image alt='cross' src={cross} className="img-fluid" />
      </span>
    </a>
  </div>
)})}





        
        {/* End Column 2 */}
        {/* Start Column 3 */}
      </div>
    </div>
  </div>
  {/* End Product Section */}
  {/* Start Why Choose Us Section */}
  <div className="why-choose-section">
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-lg-6">
          <h2 className="section-title">Why Choose Us</h2>
          <p>
            Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
            velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
          </p>
          <div className="row my-5">
            <div className="col-6 col-md-6">
              <div className="feature">
                <div className="icon">
                  <Image
                    src={truck}
                    alt="Image"
                    className="imf-fluid"
                  />
                </div>
                <h3>Fast &amp; Free Shipping</h3>
                <p>
                  Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                  aliquet velit. Aliquam vulputate.
                </p>
              </div>
            </div>
            <div className="col-6 col-md-6">
              <div className="feature">
                <div className="icon">
                  <Image src={bag} alt="Image" className="imf-fluid" />
                </div>
                <h3>Easy to Shop</h3>
                <p>
                  Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                  aliquet velit. Aliquam vulputate.
                </p>
              </div>
            </div>
            <div className="col-6 col-md-6">
              <div className="feature">
                <div className="icon">
                  <Image
                    src={support}
                    alt="Image"
                    className="imf-fluid"
                  />
                </div>
                <h3>24/7 Support</h3>
                <p>
                  Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                  aliquet velit. Aliquam vulputate.
                </p>
              </div>
            </div>
            <div className="col-6 col-md-6">
              <div className="feature">
                <div className="icon">
                  <Image
                    src={returns}
                    alt="Image"
                    className="imf-fluid"
                  />
                </div>
                <h3>Hassle Free Returns</h3>
                <p>
                  Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                  aliquet velit. Aliquam vulputate.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="img-wrap">
            <Image
              src={s_image1}
              alt="Image"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End Why Choose Us Section */}
  {/* Start We Help Section */}
  <div className="we-help-section">
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-lg-7 mb-5 mb-lg-0">
          <div className="imgs-grid">
            <div className="grid grid-1">
              <Image src={imggrid1} height={600} alt="Untree.co" />
            </div>
            <div className="grid grid-2">
              <Image src={imggrid2} height={200} alt="Untree.co" />
            </div>
            <div className="grid grid-3">
              <Image src={imggrid3} height={450} alt="Untree.co" />
            </div>
          </div>
        </div>
        <div className="col-lg-5 ps-lg-5">
          <h2 className="section-title mb-4">
            We Help You Make Modern Interior Design
          </h2>
          <p>
            Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis
            nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate
            velit imperdiet dolor tempor tristique. Pellentesque habitant morbi
            tristique senectus et netus et malesuada
          </p>
          <ul className="list-unstyled custom-list my-4">
            <li>Donec vitae odio quis nisl dapibus malesuada</li>
            <li>Donec vitae odio quis nisl dapibus malesuada</li>
            <li>Donec vitae odio quis nisl dapibus malesuada</li>
            <li>Donec vitae odio quis nisl dapibus malesuada</li>
          </ul>
          <p>
            <a href="#" className="btn">
              Explore
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
  {/* End We Help Section */}
  {/* Start Popular Product */}
  <div className="popular-product">
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
          <div className="product-item-sm d-flex">
            <div className="thumbnail">
              <Image
                src={product1}
                alt="Image"
                className="img-fluid"
              />
            </div>
            <div className="pt-3">
              <h3>Nordic Chair</h3>
              <p>
                Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio{" "}
              </p>
              <p>
                <a href="#">Read More</a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
          <div className="product-item-sm d-flex">
            <div className="thumbnail">
              <Image
                src={product2}
                alt="Image"
                className="img-fluid"
              />
            </div>
            <div className="pt-3">
              <h3>Kruzo Aero Chair</h3>
              <p>
                Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio{" "}
              </p>
              <p>
                <a href="#">Read More</a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
          <div className="product-item-sm d-flex">
            <div className="thumbnail">
              <Image
                src={product3}
                alt="Image"
                className="img-fluid"
              />
            </div>
            <div className="pt-3">
              <h3>Ergonomic Chair</h3>
              <p>
                Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio{" "}
              </p>
              <p>
                <a href="#">Read More</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End Popular Product */}
  {/* Start Testimonial Slider */}
  <div className="testimonial-section">
    <div className="container">
      <div className="row">
        <div className="col-lg-7 mx-auto text-center">
          <h2 className="section-title">Testimonials</h2>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-12">
          <div className="testimonial-slider-wrap text-center">
            <div id="testimonial-nav">
              <span className="prev" data-controls="prev">
                <span className="fa fa-chevron-left" />
              </span>
              <span className="next" data-controls="next">
                <span className="fa fa-chevron-right" />
              </span>
            </div>
            <div className="testimonial-slider">
              <div className="item">
                <div className="row justify-content-center">
                  <div className="col-lg-8 mx-auto">
                    <div className="testimonial-block text-center">
                      <blockquote className="mb-5">
                        <p>
                          “Donec facilisis quam ut purus rutrum lobortis. Donec
                          vitae odio quis nisl dapibus malesuada. Nullam ac
                          aliquet velit. Aliquam vulputate velit imperdiet dolor
                          tempor tristique. Pellentesque habitant morbi
                          tristique senectus et netus et malesuada fames ac
                          turpis egestas. Integer convallis volutpat dui quis
                          scelerisque.”
                        </p>
                      </blockquote>
                      <div className="author-info">
                        <div className="author-pic">
                          <Image
                            src={person1}
                            alt="Maria Jones"
                            className="img-fluid"
                          />
                        </div>
                        <h3 className="font-weight-bold">Maria Jones</h3>
                        <span className="position d-block mb-3">
                          CEO, Co-Founder, XYZ Inc.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* END item */}
              <div className="item">
                <div className="row justify-content-center">
                  <div className="col-lg-8 mx-auto">
                    <div className="testimonial-block text-center">
                      <blockquote className="mb-5">
                        <p>
                          “Donec facilisis quam ut purus rutrum lobortis. Donec
                          vitae odio quis nisl dapibus malesuada. Nullam ac
                          aliquet velit. Aliquam vulputate velit imperdiet dolor
                          tempor tristique. Pellentesque habitant morbi
                          tristique senectus et netus et malesuada fames ac
                          turpis egestas. Integer convallis volutpat dui quis
                          scelerisque.”
                        </p>
                      </blockquote>
                      <div className="author-info">
                        <div className="author-pic">
                          <Image
                            src={person1}
                            alt="Maria Jones"
                            className="img-fluid"
                          />
                        </div>
                        <h3 className="font-weight-bold">Maria Jones</h3>
                        <span className="position d-block mb-3">
                          CEO, Co-Founder, XYZ Inc.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* END item */}
              <div className="item">
                <div className="row justify-content-center">
                  <div className="col-lg-8 mx-auto">
                    <div className="testimonial-block text-center">
                      <blockquote className="mb-5">
                        <p>
                          “Donec facilisis quam ut purus rutrum lobortis. Donec
                          vitae odio quis nisl dapibus malesuada. Nullam ac
                          aliquet velit. Aliquam vulputate velit imperdiet dolor
                          tempor tristique. Pellentesque habitant morbi
                          tristique senectus et netus et malesuada fames ac
                          turpis egestas. Integer convallis volutpat dui quis
                          scelerisque.”
                        </p>
                      </blockquote>
                      <div className="author-info">
                        <div className="author-pic">
                          <Image
                            src={person1}
                            alt="Maria Jones"
                            className="img-fluid"
                          />
                        </div>
                        <h3 className="font-weight-bold">Maria Jones</h3>
                        <span className="position d-block mb-3">
                          CEO, Co-Founder, XYZ Inc.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* END item */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End Testimonial Slider */}
  {/* Start Blog Section */}
  <div className="blog-section">
    <div className="container">
      <div className="row mb-5">
        <div className="col-md-6">
          <h2 className="section-title">Recent Blog</h2>
        </div>
        <div className="col-md-6 text-start text-md-end">
          <a href="#" className="more">
            View All Posts
          </a>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
          <div className="post-entry">
            <a href="#" className="post-thumbnail">
              <Image src={post1} alt="Image" className="img-fluid" />
            </a>
            <div className="post-content-entry">
              <h3>
                <a href="#">First Time Home Owner Ideas</a>
              </h3>
              <div className="meta">
                <span>
                  by <a href="#">Kristin Watson</a>
                </span>{" "}
                <span>
                  on <a href="#">Dec 19, 2021</a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
          <div className="post-entry">
            <a href="#" className="post-thumbnail">
              <Image src={post2} alt="Image" className="img-fluid" />
            </a>
            <div className="post-content-entry">
              <h3>
                <a href="#">How To Keep Your Furniture Clean</a>
              </h3>
              <div className="meta">
                <span>
                  by <a href="#">Robert Fox</a>
                </span>{" "}
                <span>
                  on <a href="#">Dec 15, 2021</a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
          <div className="post-entry">
            <a href="#" className="post-thumbnail">
              <Image src={post3} alt="Image" className="img-fluid" />
            </a>
            <div className="post-content-entry">
              <h3>
                <a href="#">Small Space Furniture Apartment Ideas</a>
              </h3>
              <div className="meta">
                <span>
                  by <a href="#">Kristin Watson</a>
                </span>{" "}
                <span>
                  on <a href="#">Dec 12, 2021</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End Blog Section */}
  {/* Start Footer Section */}
  <footer className="footer-section">
    <div className="container relative">
      <div className="sofa-img">
        <Image src={sofa} alt="Image" className="img-fluid" />
      </div>
      <div className="row">
        <div className="col-lg-8">
          <div className="subscription-form">
            <h3 className="d-flex align-items-center">
              <span className="me-1">
                <Image
                  src={envelope}
                  alt="Image"
                  className="img-fluid"
                />
              </span>
              <span>Subscribe to Newsletter</span>
            </h3>
            <form action="#" className="row g-3">
              <div className="col-auto">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your name"
                />
              </div>
              <div className="col-auto">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                />
              </div>
              <div className="col-auto">
                <button className="btn btn-primary">
                  <span className="fa fa-paper-plane" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="row g-5 mb-5">
        <div className="col-lg-4">
          <div className="mb-4 footer-logo-wrap">
            <a href="#" className="footer-logo">
              Furni<span>.</span>
            </a>
          </div>
          <p className="mb-4">
            Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis
            nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate
            velit imperdiet dolor tempor tristique. Pellentesque habitant
          </p>
          <ul className="list-unstyled custom-social">
            <li>
              <a href="#">
                <span className="fa fa-brands fa-facebook-f" />
              </a>
            </li>
            <li>
              <a href="#">
                <span className="fa fa-brands fa-twitter" />
              </a>
            </li>
            <li>
              <a href="#">
                <span className="fa fa-brands fa-instagram" />
              </a>
            </li>
            <li>
              <a href="#">
                <span className="fa fa-brands fa-linkedin" />
              </a>
            </li>
          </ul>
        </div>
        <div className="col-lg-8">
          <div className="row links-wrap">
            <div className="col-6 col-sm-6 col-md-3">
              <ul className="list-unstyled">
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Contact us</a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-sm-6 col-md-3">
              <ul className="list-unstyled">
                <li>
                  <a href="#">Support</a>
                </li>
                <li>
                  <a href="#">Knowledge base</a>
                </li>
                <li>
                  <a href="#">Live chat</a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-sm-6 col-md-3">
              <ul className="list-unstyled">
                <li>
                  <a href="#">Jobs</a>
                </li>
                <li>
                  <a href="#">Our team</a>
                </li>
                <li>
                  <a href="#">Leadership</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-sm-6 col-md-3">
              <ul className="list-unstyled">
                <li>
                  <a href="#">Nordic Chair</a>
                </li>
                <li>
                  <a href="#">Kruzo Aero</a>
                </li>
                <li>
                  <a href="#">Ergonomic Chair</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="border-top copyright">
        <div className="row pt-4">
          <div className="col-lg-6">
            <p className="mb-2 text-center text-lg-start">
              Copyright ©. All Rights Reserved. — Designed with love by{" "}
              <a href="https://untree.co">Untree.co</a> Distributed By{" "}
              <a href="https://themewagon.com">ThemeWagon</a>{" "}
              {/* License information: https://untree.co/license/ */}
            </p>
          </div>
          <div className="col-lg-6 text-center text-lg-end">
            <ul className="list-unstyled d-inline-flex ms-auto">
              <li className="me-4">
                <a href="#">Terms &amp; Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
  {/* End Footer Section */}
</>

  )
}
