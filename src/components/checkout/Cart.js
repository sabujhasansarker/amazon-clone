import React from "react";

export const Cart = ({ cart, index, removeCart }) => {
  const { name, image } = cart;
  return (
    <div className="cart">
      <p>{name}</p>
      <img src={image} alt={name} />
      <button onClick={() => removeCart(index)}>Remove Cart</button>
    </div>
  );
};
