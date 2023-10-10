import React from 'react'
import Image from 'next/image'
import '../scss/style.scss';
import '../css/style.css';
import {products} from '../products';
import '../css/bootstrap.min.css';
import '../css/tiny-slider.css';
import cart from '../images/cart.svg';
import couch from '../images/couch.png';
import cross from '../images/cross.svg';
import sofa from '../images/sofa.png';
import envelope from '../images/envelope-outline.svg';
import user from '../images/user.svg';
import Link from 'next/link';
import cart1 from '../images/cart.svg';
import logo from '../images/logo.png';



const shop = () => {
  return (
    <>
  {/* Start Header/Navigation */}
  <nav
    className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark"
    arial-label="Furni navigation bar"
  >
    <div className="container">
      <a className="navbar-brand" href="index.html">
      <Image alt='' src={logo} height={50}/>
      <span>.</span>
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
            <Link href='./contactus' className="nav-link">
              Contact Us
            </Link>
          </li>
        </ul>
        <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
          <li>
            <a className="nav-link" href="#">
              <Image alt='' src={user} />
            </a>
          </li>
          <li>
            <Link href="./cart" className='nav-link'>
              <Image alt='' src={cart1} />
            </Link>
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
            <h1>Shop</h1>
          </div>
        </div>
        <div className="col-lg-7"></div>
      </div>
    </div>
  </div>

  {products.map((product, index) => {

return(
  <div className="untree_co-section product-section before-footer-section">
  <div className="container">
    <div className="row ">
      {/* Start Column 1 */}

        <div className='shopgrid'>
        <div className="col-12 col-md-4 col-lg-3 mb-5">
        <a className="product-item" href="#">
          <Image
              alt=''
            src={product.img}
            className="img-fluid product-thumbnail"
          />
          <h3 className="product-title">{product.title}</h3>
          <strong className="product-price">{product.price}</strong>
          <span className="icon-cross">
            <Image src={cross} alt='' className="img-fluid" />
          </span>
        </a>
      </div>
        </div>


      
      
      {/* End Column 4 */}
    </div>
    </div>
  </div>
)})}

  {/* End Hero Section */}
 
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
              Off The Grid<span>.</span>
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

export default shop