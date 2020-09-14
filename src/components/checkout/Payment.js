import React, { useContext } from "react";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import CheckoutForm from "./CheckoutForm";
import Context from "../../context/Context";
import Cart from "./Cart";

const Payment = () => {
  const { carts, removeCart } = useContext(Context);
  let price = carts.reduce((result, prd) => result + prd.price, 0);
  const stripePromise = loadStripe(
    "pk_test_JJ1eMdKN0Hp4UFJ6kWXWO4ix00jtXzq5XG"
  );

  return (
    <div className="payment">
      <h1 className="text-center">Checkout ({carts.length} items)</h1>
      <div className="container">
        <div className="delivery-address">
          <h4>Delivery Address</h4>
          <p>Dhaka,Bangladesh</p>
        </div>
        <div className="cart-items">
          {carts.map((cart, index) => (
            <Cart
              key={index}
              cart={cart}
              index={index}
              removeCart={removeCart}
            />
          ))}
        </div>
        <hr />
        <div className="payment-method">
          <h4>Payment Method</h4>
          <Elements stripe={stripePromise}>
            <CheckoutForm price={price} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
