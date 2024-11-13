import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";

function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <div className="hero-section d-flex flex-column">
        <div className="hero-image position-relative">
          <img
            src="https://placedog.net/900/600/"
            alt="Hero"
            className="w-100"
            style={{ height: "55vh", objectFit: "cover" }}
          />
          <div className="hero-text position-absolute top-50 start-50 translate-middle text-center text-white">
            <h1>Bienvenido a Neida Shop</h1>
            <p>
              Tu espacio para encontrar desde antojos irresistibles hasta
              productos de belleza y calzado de calidad. Descubre nuestras
              categorías cuidadosamente seleccionadas para ti.
            </p>
          </div>
        </div>

        <div className="container-fluid bottom-section py-3">
          <div className="row g-2">
            <div className="col-md-4 d-flex flex-column justify-content-center align-items-center text-center">
              <p className="mb-2">Explora nuestros productos</p>
              <button className="btn btn-primary comprar-button">
                Comprar
              </button>
            </div>

            <div className="col-md-8 d-flex justify-content-around">
              <img
                src="https://placedog.net/360/480/g"
                alt="Category 1"
                className="img-fluid p-1"
                style={{ maxWidth: "30%" }}
              />
              <img
                src="https://placedog.net/360/480/sepia"
                alt="Category 2"
                className="img-fluid p-1"
                style={{ maxWidth: "30%" }}
              />
              <img
                src="https://placedog.net/360/480/blur"
                alt="Category 3"
                className="img-fluid p-1"
                style={{ maxWidth: "30%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
