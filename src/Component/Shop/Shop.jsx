import React, { useEffect, useState } from "react";
import "./Shop.css";
import Product from "../Products/Product";

const Shop = () => {
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="shop-contaicer">
      <div className="products-container">
        
        {Products.map((product) => (
          <Product name={product.name}
          key = {product.id}
          Allproducts = {product}></Product>
        ))}
      </div>

      <div className="cart-container">
        <h2>Cart</h2>
      </div>
    </div>
  );
};

export default Shop;
