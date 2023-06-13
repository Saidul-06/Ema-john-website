import React from "react";
import "./Product.css";
const Product = (Props) => {
  console.log(Props);
  const { name, price, seller, ratings, img } = Props.Allproducts;
  return (
    <div className="Prdcuts">
      <img src={img} alt="" />

      <div className="Product_info">
        <h6 className="Product_name"> Name : {name}</h6>
        <h3>Price : {price}</h3>
        <h3>Manufecturer : {seller}</h3>
        <h3>Rating : {ratings}</h3>
      </div>

      <button className="button-cart">Add to Cart</button>
    </div>
  );
};

export default Product;
