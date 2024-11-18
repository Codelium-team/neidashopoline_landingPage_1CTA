import React, { useRef } from "react";
import "./CardSlider.css";
import ProductCard from "./ProductCard";

const CardSlider = () => {
  const sliderRef = useRef(null);

  const products = [
    {
      image: "https://place.dog/600/400",
      title: "Producto 1",
      description: "Descripción del producto 1.",
    },
    {
      image: "https://place.dog/600/400",
      title: "Producto 2",
      description: "Descripción del producto 2.",
    },
    {
      image: "https://place.dog/600/400",
      title: "Producto 3",
      description: "Descripción del producto 3.",
    },
    {
      image: "https://place.dog/600/400",
      title: "Producto 4",
      description: "Descripción del producto 4.",
    },
    {
      image: "https://place.dog/600/400",
      title: "Producto 5",
      description: "Descripción del producto 5.",
    },
    {
      image: "https://place.dog/600/400",
      title: "Producto 6",
      description: "Descripción del producto 6.",
    },
  ];

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
      <div className="card-slider" ref={sliderRef}>
        {products.map((product, index) => (
          <div key={index} className="card-slide">
            <ProductCard
              image={product.image}
              title={product.title}
              description={product.description}
            />
          </div>
        ))}
      </div>
      <button className="arrow right-arrow" onClick={slideRight}>
        &#8594;
      </button>
    </div>
  );
};

export default CardSlider;
