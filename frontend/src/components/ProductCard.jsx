import React, { useEffect } from "react";
import "./ProductCard.css";

const WHATSAPP_NUMBER = "56947184073";
const WHATSAPP_MESSAGE = "¡Hola! Me interesa conocer más sobre sus productos.";

const ProductCard = ({ image }) => {
  const isInstagram = image && typeof image === 'string' && image.includes("instagram.com");
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  useEffect(() => {
    if (isInstagram && window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, [image, isInstagram]);

  return (
    <div className="product-card">
      {isInstagram ? (
        <blockquote
          className="instagram-media"
          data-instgrm-permalink={image}
          data-instgrm-version="14"
        ></blockquote>
      ) : (
        <img src={image} alt="Product" className="product-image" />
      )}
      <div className="product-card-cta">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-contactar"
        >
          <i className="fa-brands fa-whatsapp"></i> Contactar
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
