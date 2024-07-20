// app/cart/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { CreditCard, PaymentForm } from "react-square-web-payments-sdk";
import { submitPayment } from "../actions/actions";
import styles from "../styles/Cart.module.css";

const Cart = () => {
  const [isCheckout, setIsCheckout] = useState(false);
  const appId = "sandbox-sq0idb-ZzwSnAg_JxodGMK-gnK-gw";
  const locationId = "LN8TP2PP4XFBR";

  const cartItems = [
    { id: 1, name: "Item 1", price: 10.0 },
    { id: 2, name: "Item 2", price: 15.0 },
    { id: 3, name: "Item 3", price: 20.0 },
  ];

  const handleCheckout = () => {
    setIsCheckout(true);
  };

  return (
    <div className={styles.cartContainer}>
      <h1>Shopping Cart</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price.toFixed(2)}
          </li>
        ))}
      </ul>
      <button onClick={handleCheckout} className={styles.checkoutButton}>
        Checkout
      </button>
      {isCheckout && (
        <PaymentForm
          applicationId={appId}
          locationId={locationId}
          cardTokenizeResponseReceived={async (token) => {
            const result = await submitPayment(token.token);
            console.log(result);
          }}
        >
          <CreditCard />
        </PaymentForm>
      )}
      <Link href="/" className={styles.backButton}>
        Back to Home
      </Link>
    </div>
  );
};

export default Cart;
