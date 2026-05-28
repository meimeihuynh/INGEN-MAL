import Products from "../products";
import "../App.css";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProductCard() {
  const navigate = useNavigate();

  return (
    <div className="product-card">
      {Products.map((product) => (
        <div
          key={product.id}
          className="product-item"
          style={{
            backgroundImage: `url(${product.image})`
          }}
        >
          <h3 className="product-name">
            {product.name}
          </h3>

          <p className="product-price">
            {product.price}
          </p>
        </div>
      ))}
    </div>
  );
}