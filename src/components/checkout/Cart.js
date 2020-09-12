import React from "react";

export const Cart = ({ cart, index, removeCart }) => {
  const { name, image, price, discount } = cart;
  return (
    <div className="cart">
      <div className="image-container">
        <img src={image} alt={name} />
      </div>
      <div className="text-container">
        <p>
          <b>{name}</b>
        </p>
        <p className="price">
          <b>${price}</b>
          <span> {discount !== 0 && ` (- ${discount}% discount)`}</span>
        </p>
        <button onClick={() => removeCart(index)}>Remove Cart</button>
      </div>
    </div>
  );
};
