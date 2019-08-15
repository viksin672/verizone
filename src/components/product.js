import React from "react";
import { Link } from "react-router-dom";

const Product = ({
  name,
  image,
  description,
  price
}) => (
  

    
    <div className="col-sm-4">
    <div className="card">
      <div className="card-body">
          <img  className="card-img-top" src={image}/>
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{price}</p>
        <p className="card-text">{description}</p>
        <Link to ={`/cart1/${name}/${description}/${price}`} class="btn btn-primary" >Add to cart</Link>
      </div>
    </div>
  </div>


  );


export default Product;