import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image'
import user from '../images/user.svg';
import cart1 from '../images/cart.svg';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import {products} from '../products';
;

const Header = () => {

const [_products, setProducts] = useState<IProduct[]>([]);
const [cart, setCart] = useState<IProduct[]>([]); // Specify the type for cart
const [cartCounter, setCartCounter] = useState<number>(0); // Specify the type for cartCounter

interface IProduct{
  id:string,
  img: StaticImageData,
  title: string,
  description:string,
  price: number,
  quantity:number
}

function AddToCart(product: IProduct) {
  const hasProduct = products.find((x) => x.id === product.id);

  if (hasProduct) {
    // Product is in the cart, increase quantity
    const updatedProducts = products.map((x) =>
      x.id === product.id ? { ...x, quantity: x.quantity + 1 } : x
    );
    setProducts(updatedProducts);

    // Display a success message
    toast.success(`${product.title} added to cart`);
  } else {
    // Product is not in the cart - add with quantity = 1
    const productToAdd = {
      ...product,
      quantity: 1,
    };

    const newProducts = [...products, productToAdd] as IProduct[];
    setProducts(newProducts);

    // Display a success message
    toast.success(`${product.title} added to cart`);
  }

  localStorage.setItem('myData', JSON.stringify(products));
}



// Load cart data from local storage when the component mounts
useEffect(() => {
  const savedCart = localStorage.getItem('cart');
  if (savedCart !== null) {
    const parsedCart = JSON.parse(savedCart);
    setCart(parsedCart);
    updateCartCounter(parsedCart);
  }
}, []);

// Function to add an item to the cart and update the counter
const addToCart = (product: IProduct) => { // Specify the type for product
  const updatedCart = [...cart, product];
  setCart(updatedCart);
  updateCartCounter(updatedCart);
  localStorage.setItem('cart', JSON.stringify(updatedCart));
};

// Function to update the cart counter
const updateCartCounter = (cartItems: IProduct[]) => { // Specify the type for cartItems
  const totalCount = cartItems.reduce((total, item) => total + 1, 0);
  setCartCounter(totalCount);
};

  return (
    <div>
        <div>
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
            <Link href="./cart" className='nav-link'>
              <Image alt='' src={cart1} />
            </Link>
          </li>
          <div className='cart_counter'>{cartCounter}</div>
        </ul>
      </div>
    </div>
  </nav>
    </div>
    </div>
  )
}

export default Header