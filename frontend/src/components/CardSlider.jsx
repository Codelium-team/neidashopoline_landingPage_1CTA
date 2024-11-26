import React, { useEffect, useState, useRef } from "react";
import "./CardSlider.css";
import ProductCard from "./ProductCard";
import { ENDPOINT } from "../config/constants";

const CardSlider = () => {
  const sliderRef = useRef(null);
  const [instagramPosts, setInstagramPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInstagramUrls = async () => {
      try {
        const response = await fetch(ENDPOINT.instagramEmbed);
        const data = await response.json();
        console.log("Fetched Instagram URLs:", data);
        setInstagramPosts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching Instagram URLs:", error);
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
