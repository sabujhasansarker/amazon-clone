import React from "react";

// scss
import "./product.scss";

const Product = ({ product: { id, name, image, price, discount } }) => {
  return (
    <div className="product">
      <div className="header">
        <p>{name}</p>
        <p>
          <b>${price - Math.floor(price / discount === 0 ? 0 : discount)}</b>
          <span> {discount !== 0 && ` (- ${discount}% discount)`}</span>
        </p>
      </div>
      <img src={image} alt={name} />
      <button>Add to cart</button>
    </div>
  );
};

export default Product;
