import React from "react";
import { Link } from "react-router-dom";

function Product({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <div className="product-box">
        <h2>
          <Link>{product.title}</Link>
        </h2>
        <span> {product.price} </span>
        <p> {product.description} </p>
      </div>
      <div className="row_btn">
        <button id="btn-delete">delete</button>
        <Link id="btn-view" to={`/products/${product.id}`}>
          view
        </Link>
      </div>
    </div>
  );
}

export default Product;
