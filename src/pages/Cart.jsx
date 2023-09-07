import "./styles/cartStyles.css";
import shirtImg from "./shirt.png";
import lipstickImg from "./lipstick.jpeg";
import mascaraImg from "./mascara.jpeg";
import shoeImg from "./shoes.png";
import jeansImg from "./jeans.png";
import foundationImg from "./foundation.jpeg";
import { useState } from "react";
import logo from "./kpmg_logo.png";
import DateTime from "../components/DateTime";
import { Router, Routes, Route, Link } from "react-router-dom";

export default function Cart() {
   // mock data: cart items
   const cartItemsInitial = [
      {
         id: 1,
         brandName: "Lakme",
         productName: "Matte Lipstick - Red",
         mrp: 1299.0,
         price: 1099.0,
         quantity: 1,
         image: { lipstickImg },
      },
      {
         id: 2,
         brandName: "Maybelline",
         productName: "Mascara - Black",
         mrp: 899.0,
         price: 899.0,
         quantity: 2,
         image: { mascaraImg },
      },
      {
         id: 3,
         brandName: "Nike",
         productName: "Running Shoes for Men",
         mrp: 1999.0,
         price: 1499.0,
         quantity: 1,
         image: { shoeImg },
      },
      {
         id: 4,
         brandName: "Adidas",
         productName: "Sports T-shirt for Men",
         mrp: 1299.0,
         price: 799.0,
         quantity: 3,
         image: { shirtImg },
      },
      {
         id: 5,
         brandName: "MAC",
         productName: "Foundation",
         mrp: 1299.0,
         price: 1299.0,
         quantity: 1,
         image: { foundationImg },
      },
      {
         id: 6,
         brandName: "Levi's",
         productName: "Jeans",
         mrp: 899.0,
         price: 899.0,
         quantity: 2,
         image: { jeansImg },
      },
   ];

   const [cartItems, setCartItems] = useState(cartItemsInitial);
   const handleDeleteItem = (itemId) => {
      const updatedCart = cartItems.filter((item) => item.id !== itemId);
      setCartItems(updatedCart);
   };

   return (
      <div className="cart-container">
         <div className="cart-left">
            <div className="list-header">
               <div className="header-item">product</div>
               <div className="header-item">quantity</div>
               <div className="header-item">price</div>
               <div className="header-item">subtotal</div>
            </div>
            <div className="item-list">
               {cartItems.map((item) => (
                  <ProductTile
                     key={item.id}
                     item={item}
                     onDelete={handleDeleteItem}
                  />
               ))}
            </div>
         </div>
         <div className="cart-right">
            <div className="logo-dt">
               <img className="cart-logo-img" src={logo} />
               <DateTime />
            </div>
            <OrderSummary cartItems={cartItems} />
         </div>
      </div>
   );
}

function ProductTile({ item, onDelete }) {
   const [isDeleting, setIsDeleting] = useState(false);
   const disc = item.mrp - item.price;
   function handleDeleteClick() {
      setIsDeleting(true);
      setTimeout(() => {
         onDelete(item.id);
      }, 500);
   }

   return (
      <div className={`product-tile ${isDeleting ? "fade-out" : ""}`}>
         <div className="detail-1">
            <img src={item.image} alt="product-image" />
         </div>
         <div className="detail-2">
            <div className="brand-name">{item.brandName}</div>
            <div className="product-name">{item.productName}</div>
         </div>
         <div className="detail-3">
            <div className="product-quantity">{item.quantity}</div>
         </div>
         <div className="detail-4">
            <div className="product-price">₹ {item.price}</div>
            {disc > 0 && (
               <div style={{ display: "flex" }}>
                  <div className="mrp">₹ {item.mrp}</div>
                  <div className="discount">
                     {Math.trunc(((item.mrp - item.price) * 100) / item.mrp)}%
                     OFF
                  </div>
               </div>
            )}
         </div>
         <div className="detail-5">
            <div className="subtotal-outer">
               ₹{" "}
               <span className="subtotal-inner">
                  {item.price * item.quantity}
               </span>
            </div>
         </div>
         <div className="detail-6">
            <button className="delete-button" onClick={handleDeleteClick}>
               ╳
            </button>
         </div>
      </div>
   );
}

function OrderSummary({ cartItems }) {
   const itemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
   const total = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
   );
   const discount = cartItems.reduce(
      (acc, item) => acc + (item.mrp - item.price) * item.quantity,
      0
   );
   const tax = Math.trunc((total * 18) / 100);
   const grandTotal = total - discount + tax;

   return (
      <>
         <div className="cart-summary">
            <div className="summary-item">
               <div className="summary-label">Item Count</div>
               <div className="summary-value">{itemCount}</div>
            </div>
            <div className="summary-item">
               <div className="summary-label">Total Amount</div>
               <div className="summary-value">₹ {total}</div>
            </div>
            <div className="summary-item">
               <div className="summary-label">Savings</div>
               <div className="summary-value">₹ {discount}</div>
            </div>
            <div className="summary-item">
               <div className="summary-label">Tax (18%)</div>
               <div className="summary-value">₹ {tax}</div>
            </div>
            <hr />
            <div className="summary-item">
               <div className="summary-label">Grand Total</div>
               <div className="summary-value grand-total">₹ {grandTotal}</div>
            </div>
         </div>
         <div className="print-invoice">
            do you need an invoice?
            <button className="notif-button">Print Invoice</button>
         </div>
         {}
         <div className="notification-channel">
            please select your preferred notification channel
            <div className="notif-buttons-1">
               <button className="notif-button">WhatsApp</button>
               <button className="notif-button">SMS</button>
            </div>
            <div className="notif-buttons-2">
               <button className="notif-button">Both WhatsApp & SMS</button>
            </div>
         </div>
      </>
   );
}

function CarryBags() {
   return (
      <div className="carry-bags-sel">
         <button>Add Carry Bag</button>
      </div>
   );
}

function PaymentOpts() {
   return (
      <div className="payment-opts">
         <div className="payment-opts-header">Payment Options</div>
         <div className="payment-opts-body">
            <div className="payment-opts-item">
               <div className="payment-opts-item-name">Cash</div>
               <div className="payment-opts-item-price">₹ 5</div>
            </div>
            <div className="payment-opts-item">
               <div className="payment-opts-item-name">Card</div>
               <div className="payment-opts-item-price">₹ 10</div>
            </div>
            <div className="payment-opts-item">
               <div className="payment-opts-item-name">UPI</div>
               <div className="payment-opts-item-price">₹ 15</div>
            </div>
         </div>
      </div>
   );
}
