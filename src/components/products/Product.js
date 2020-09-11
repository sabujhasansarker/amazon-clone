import React from "react";

// scss
import "./product.scss";

const Product = ({ product, addCart }) => {
  let { id, name, image, price, discount } = product;
  return (
    <div className="product">
      <div className="header">
        <p>{name}</p>
        <p>
          <b>${price}</b>
          <span> {discount !== 0 && ` (- ${discount}% discount)`}</span>
        </p>
      </div>
      <img src={image} alt={name} />
      <button onClick={() => addCart(product)}>Add to cart</button>
    </div>
  );
};

export default Product;
