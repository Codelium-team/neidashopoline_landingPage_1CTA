import React, { useEffect } from "react";

const ProductCard = ({ image }) => {
  useEffect(() => {
    if (image && image.includes("instagram.com")) {
      window.instgrm.Embeds.process();
    }
  }, [image]);

  return (
    <div className="product-card">
      {image.includes("instagram.com") ? (
        <blockquote
          className="instagram-media"
          data-instgrm-permalink={image}
          data-instgrm-version="14"
        ></blockquote>
      ) : (
        <img src={image} alt="Product" className="product-image" />
      )}
    </div>
  );
};

export default ProductCard;
