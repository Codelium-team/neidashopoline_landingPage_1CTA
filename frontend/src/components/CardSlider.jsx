import React, { useEffect, useState, useRef } from "react";
import "./CardSlider.css";
import ProductCard from "./ProductCard";
import { ENDPOINT } from "../config/constants";

// Imágenes locales de fallback
import img02 from "../assets/products/02.jpg";
import img03 from "../assets/products/03.jpg";
import img04 from "../assets/products/04.jpg";
import img05 from "../assets/products/05.jpg";
import img06 from "../assets/products/06.jpg";
import img07 from "../assets/products/07.jpg";

const fallbackImages = [img02, img03, img04, img05, img06, img07];

const CardSlider = () => {
  const sliderRef = useRef(null);
  const [instagramPosts, setInstagramPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInstagramUrls = async () => {
      try {
        const response = await fetch(ENDPOINT.instagramEmbed);
        if (!response.ok) {
          throw new Error("Backend no disponible");
        }
        const data = await response.json();
        console.log("Fetched Instagram URLs:", data);
        
        // Si no hay datos o el array está vacío, usar fallback
        if (!data || data.length === 0) {
          setInstagramPosts(fallbackImages);
        } else {
          setInstagramPosts(data);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching Instagram URLs, usando imágenes locales:", error);
        setInstagramPosts(fallbackImages);
        setLoading(false);
      }
    };

    fetchInstagramUrls();
  }, []);

  const slideLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const slideRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="card-slider-container">
      <button className="arrow left-arrow" onClick={slideLeft}>
        &#8592;
      </button>
      <div
        className={`card-slider ${loading ? "loading" : ""}`}
        ref={sliderRef}
      >
        {loading ? (
          <p>Cargando posts de Instagram...</p>
        ) : (
          instagramPosts.map((url, index) => (
            <div key={index} className="card-slide">
              <ProductCard image={url} />
            </div>
          ))
        )}
      </div>
      <button className="arrow right-arrow" onClick={slideRight}>
        &#8594;
      </button>
    </div>
  );
};

export default CardSlider;
