import React, { useContext, Fragment } from "react";
import Context from "../../context/Context";
import { Cart } from "./Cart";

import "./checkout.scss";

const Checkouts = () => {
  const { carts, removeCart } = useContext(Context);
  let price = carts.reduce((result, prd) => result + prd.price, 0);
  return (
    <div className="checkouts">
      <div className="header">
        <div className="left">
          <h1>Banner</h1>
          <h4>Hello, Guest</h4>
          <h1>Your Shopping Basket</h1>
          <hr />
        </div>
        <div className="right">
          <p>
            SubTotal ({carts.length}) : <b>${price}</b>
          </p>
          <input type="checkbox" /> <p>This order contains a gift</p>
          <button>Proceed to Checkout</button>
        </div>
      </div>
      <div className="cart-items">
        {carts.map((cart, index) => (
          <Cart key={index} cart={cart} index={index} removeCart={removeCart} />
        ))}
      </div>
    </div>
  );
};

export default Checkouts;
