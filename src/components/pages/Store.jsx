import React from "react";
import CardSlider from "../CardSlider";
import "./Store.css";

function Store() {
  return (
    <div className="store-page container my-5">
      {/* Header Section */}
      <header className="text-center mb-4">
        <h1 className="store-title">Descubre lo Mejor de Neida Shop</h1>
        <p className="store-description">
          Te invitamos a explorar los productos más populares de nuestras
          categorías. Variedad, calidad y precios especiales que se adaptan a tu
          estilo de vida.
        </p>
      </header>

      {/* Carousel Section */}
      <section>
        <h2 className="section-title text-center mb-3">Nuestros Destacados</h2>
        <CardSlider />
      </section>
    </div>
  );
}

export default Store;
