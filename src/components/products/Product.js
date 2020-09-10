import React from "react";

const Product = ({ product: { id, name, image, price } }) => {
  return (
    <div className="product">
      <h2>{name}</h2>
      <img src={image} alt={name} />
    </div>
  );
};

export default Product;
