'use client'
import React, { useEffect, useState } from 'react';
import { discount } from '../discount';
import '../scss/style.scss';
import Image from 'next/image'
import '../css/style.css';
import '../css/bootstrap.min.css';
import '../css/tiny-slider.css';
import cart1 from '../images/cart.svg'
import user from '../images/user.svg';
import product1 from '../images/product-1.png';
import product2 from '../images/product-2.png';
import sofa from '../images/sofa.png';
import envelope from '../images/envelope-outline.svg';

interface IProduct {
  id: string;
  img: StaticImageData;
  title: string;
  description: string;
  price: number;
  quantity: number;
}

interface Idiscount{
  id: string;
  discount: string;
  discountby: number;
}

const CartPage = () => {
  // State to hold the products retrieved from localStorage
  const [cartProducts, setCartProducts] = useState<IProduct[]>([]);
  const [couponCode, setCouponCode] = useState<string>('');
  const [discountApplied, setDiscountApplied] = useState<number | null>(null);


  // Function to retrieve products from localStorage
  const getProductsFromLocalStorage = () => {
    const storedProducts = localStorage.getItem('myData');
    if (storedProducts) {
      const parsedProducts = JSON.parse(storedProducts);
      setCartProducts(parsedProducts);
    }
  };

  // Function to increase the quantity of a product
  const increaseQuantity = (productId: string) => {
    const updatedCartProducts = cartProducts.map((product) => {
      if (product.id === productId) {
        return {
          ...product,
          quantity: product.quantity + 1,
        };
      }
      return product;
    });
    setCartProducts(updatedCartProducts);
    updateLocalStorage(updatedCartProducts);
  };

  // Function to decrease the quantity of a product
 // Function to decrease the quantity of a product or remove it if the quantity reaches zero
const decreaseQuantity = (productId: string) => {
  const updatedCartProducts = cartProducts.map((product) => {
    if (product.id === productId) {
      const updatedQuantity = product.quantity - 1;
      if (updatedQuantity <= 0) {
        // If quantity reaches zero or less, remove the item from the cart
        return null;
      } else {
        return {
          ...product,
          quantity: updatedQuantity,
        };
      }
    }
    return product;
  });

  // Filter out null values (removed items) from the updatedCartProducts
  const filteredCartProducts = updatedCartProducts.filter((product) => product !== null) as IProduct[];

  setCartProducts(filteredCartProducts);
  updateLocalStorage(filteredCartProducts);
};


  // Function to update localStorage with the new cartProducts
  const updateLocalStorage = (updatedCartProducts: IProduct[]) => {
    localStorage.setItem('myData', JSON.stringify(updatedCartProducts));
  };

  // Call the function to get products when the component mounts
  useEffect(() => {
    getProductsFromLocalStorage();
  }, []);

  const calculateTotal = () => {
    let total = 0;
    cartProducts.forEach((product) => {
      total += product.price * product.quantity;
    });
    return total; // Return the total as a number
  };


  const removeItem = (productId: string) => {
    const updatedCartProducts = cartProducts.filter((product) => product.id !== productId);
    setCartProducts(updatedCartProducts);
    updateLocalStorage(updatedCartProducts);
  };


  const applyCoupon = () => {
    const foundDiscount = discount.find((item) => item.discount === couponCode);

    if (foundDiscount) {
      const discountPercentage = foundDiscount.discountby;
      const totalWithDiscount = calculateTotal() * (1 - discountPercentage);
      setDiscountApplied(discountPercentage);
      // You can update your cart total with the discounted value here
    } else {
      // Handle an invalid coupon code
      setDiscountApplied(null); // Reset the discount if the code is invalid
      // You can display an error message to the user here
    }
  };

  return (
    <>
       <nav
    className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark"
    arial-label="Furni navigation bar"
  >
    <div className="container">
      <a className="navbar-brand" href="index.html">
        Furni<span>.</span>
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
          <li className="nav-item ">
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
              <Image alt='' src={cart1} />
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
            <h1>Cart</h1>
          </div>
        </div>
        <div className="col-lg-7"></div>
      </div>
    </div>
  </div>

  <div className="untree_co-section before-footer-section">
    <div className="container">
      <div className="row mb-5">
        <form className="col-md-12" method="post">
          <div className="site-blocks-table">
            <table className="table">
              <thead>
                <tr>
                  <th className="product-thumbnail">Image</th>
                  <th className="product-name">Product</th>
                  <th className="product-price">Price</th>
                  <th className="product-quantity">Quantity</th>
                  <th className="product-total">Total</th>
                  <th className="product-remove">Remove</th>
                </tr>
              </thead>
              <tbody>
          {cartProducts.map((product) => (
            <tr key={product.id}>
              <td className="product-thumbnail">
                <img src={product.img.src} alt={product.title} className="img-fluid" />
              </td>
              <td className="product-name">
                <h2 className="h5 text-black">{product.title}</h2>
              </td>
              <td>R{product.price.toFixed(2)}</td>
              <td>
                <div className="input-group mb-3 d-flex align-items-center quantity-container" style={{ maxWidth: 120 }}>
                  <div className="input-group-prepend">
                    <button className="btn btn-outline-black decrease" type="button" onClick={() => decreaseQuantity(product.id)}>
                      -
                    </button>
                  </div>
                  <span className="form-control text-center quantity-amount">
                    {product.quantity}
                  </span>
                  <div className="input-group-append">
                    <button className="btn btn-outline-black increase" type="button" onClick={() => increaseQuantity(product.id)}>
                      +
                    </button>
                  </div>
                </div>
              </td>
              <td>R{(product.price * product.quantity).toFixed(2)}</td>
              <td>
                <a href="#" className="btn btn-black btn-sm" onClick={() => removeItem(product.id)} >
                  X
                </a>
              </td>
            </tr>
          ))}
        </tbody>
            </table>
          </div>
        </form>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="row mb-5">
            <div className="col-md-6 mb-3 mb-md-0">
              <button className="btn btn-black btn-sm btn-block">
                Update Cart
              </button>
            </div>
            <div className="col-md-6">
              <button className="btn btn-outline-black btn-sm btn-block">
                Continue Shopping
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <label className="text-black h4" htmlFor="coupon">
                Coupon
              </label>
              <p>Enter your coupon code if you have one.</p>
            </div>
            <div className="col-md-8 mb-3 mb-md-0">
            <input
              type="text"
              className="form-control py-3"
              id="coupon"
              placeholder="Coupon Code"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
            />
          </div>
            <div className="col-md-4">
              <button className="btn btn-black" onClick={applyCoupon}>Apply Coupon</button>
            </div>
          </div>
        </div>
        <div className="col-md-6 pl-5">
          <div className="row justify-content-end">
            <div className="col-md-7">
              <div className="row">
                <div className="col-md-12 text-right border-bottom mb-5">
                  <h3 className="text-black h4 text-uppercase">Cart Totals</h3>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-6">
                  <span className="text-black">Subtotal</span>
                </div>
                <div className="col-md-6 text-right">
                  <strong className="text-black">R{calculateTotal().toFixed(2)}</strong>
                </div>
              </div>
              

             

              {discountApplied !== null ? (
          <div className="row mb-5">
            <div className="col-md-6">
              <span className="text-black">Total: R{calculateTotal().toFixed(2)}</span>
            </div>
            <div className="col-md-6">
              <span className="text-black">Discount Applied: {discountApplied * 100}%</span>
            </div>
              <div>
                <strong>Total with Discount: R{(calculateTotal() * (1 - discountApplied)).toFixed(2)}</strong>
              </div>
          </div>
        ) : (

          
          <h4>Total: R{calculateTotal().toFixed(2)}</h4>
        )}




              <div className="row">
                <div className="col-md-12">
                  <button
                    className="btn btn-black btn-lg py-3 btn-block"
                    // onclick="window.location='checkout.html'"
                  >
                    Proceed To Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> 
      
    </>
  );
}

export default CartPage;
