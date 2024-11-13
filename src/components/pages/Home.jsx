import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
import "./Home.css";
import heroImage from "../../assets/maxeylash-JNuPhasKGbU-unsplash.png";
import categoryImage1 from "../../assets/content-pixie-9l7r-n1zt-Y-unsplash.png";
import categoryImage2 from "../../assets/ajeet-panesar-4CYxeonhkxY-unsplash.png";
import categoryImage3 from "../../assets/pranav-kumar-jain-RkGKrMMRED4-unsplash.png";

function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <div className="hero-section d-flex flex-column">
        <div className="hero-image position-relative">
          <img
            src={heroImage}
            alt="Juego de brochas de maquillaje sobre mesa blanca"
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
          <div className="attribution text-white position-absolute bottom-0 end-0 p-2">
            Foto de{" "}
            <a
              href="https://unsplash.com/@maxeylash"
              className="text-white"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "underline" }}
            >
              MaxeyLash
            </a>{" "}
            en Unsplash
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="container-fluid bottom-section py-3">
        <div className="row g-2">
          <div className="col-md-4 col-12 d-flex flex-column justify-content-center align-items-center text-center">
            <p className="mb-2">Explora nuestros productos</p>
            <button className="btn btn-primary button">Comprar</button>
          </div>

          <div className="col-md-8 col-12 d-flex flex-column flex-md-row justify-content-around">
            {/* Image 1 */}
            <div className="col-12 col-md-4 position-relative mb-3">
              <img
                src={categoryImage1}
                alt="Vaporizador tipo tubo plateado y negro junto a cuchara"
                className="img-fluid w-100"
                style={{
                  objectFit: "cover",
                  height: "200px", // Adjust height to create square aspect ratio
                }}
              />
              <div className="attribution text-white position-absolute bottom-0 end-0 p-2">
                Foto de{" "}
                <a
                  href="https://unsplash.com/es/@contentpixie"
                  className="text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Content Pixie
                </a>{" "}
                en Unsplash
              </div>
            </div>

            {/* Image 2 */}
            <div className="col-12 col-md-4 position-relative mb-3">
              <img
                src={categoryImage2}
                alt="Zapato negro en las rocas"
                className="img-fluid w-100"
                style={{
                  objectFit: "cover",
                  height: "200px", // Adjust height to create square aspect ratio
                }}
              />
              <div className="attribution text-white position-absolute bottom-0 end-0 p-2">
                Foto de{" "}
                <a
                  href="https://unsplash.com/es/@ajeetpanesarphotography"
                  className="text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ajeet Panesar
                </a>{" "}
                en Unsplash
              </div>
            </div>

            {/* Image 3 */}
            <div className="col-12 col-md-4 position-relative mb-3">
              <img
                src={categoryImage3}
                alt="Comida frita en bandeja negra"
                className="img-fluid w-100"
                style={{
                  objectFit: "cover",
                  height: "200px",
                }}
              />
              <div className="attribution text-white position-absolute bottom-0 end-0 p-2">
                Foto de{" "}
                <a
                  href="https://unsplash.com/es/@peejayvisual"
                  className="text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pranav Kumar Jain
                </a>{" "}
                en Unsplash
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
