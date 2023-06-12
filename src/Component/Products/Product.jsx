import React from 'react';
import './Product.css'
const Product = (Props) => {
    console.log(Props);
    const {name,price,seller,ratings,img }= Props.Allproducts;
    return (
        <div className='Prdcuts-contain'>
            <img src={img} alt="" />
            
            <h2> Name : {name}</h2>
            <h3>Price : {price}</h3>
            <h3>Manufecturer : {seller}</h3>
            <h3>Rating : {ratings}</h3>
          

            
        </div>
    );
};

export default Product;