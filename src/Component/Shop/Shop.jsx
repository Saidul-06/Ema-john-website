import React, { useEffect, useState } from "react";
import "./Shop.css";

const Shop = () => {
    const [Products,setProducts] = useState ([]);

    useEffect(()=>{
        fetch ('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

  return (
    <div className="shop-contaicer">
      <div className="products-container">
        <h2>product: {Products.length}</h2>
      </div>
      <div className="cart-container">
        <h2>Cart</h2>

      </div>
    </div>
  );
};

export default Shop;
