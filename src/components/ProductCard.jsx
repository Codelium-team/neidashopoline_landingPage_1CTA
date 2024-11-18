import React from "react";

const ProductCard = ({ image, title, description }) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <div className="product-info">
        <h5 className="product-title">{title}</h5>
        <p className="product-description">{description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
