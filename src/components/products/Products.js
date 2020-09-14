import React, { useContext } from "react";
import Product from "./Product";
import Context from "../../context/Context";

const Products = () => {
  const { products, addCart } = useContext(Context);
  return (
    <div className="products container">
      {products &&
        products.map((product) => (
          <Product key={product.id} product={product} addCart={addCart} />
        ))}
    </div>
  );
};

export default Products;
