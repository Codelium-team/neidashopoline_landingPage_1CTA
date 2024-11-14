import React from "react";
import "./About.css";
import categoryImage1 from "../../assets/content-pixie-9l7r-n1zt-Y-unsplash.png";

function About() {
  return (
    <div className="about-section">
      <div className="about-image">
        <img src={categoryImage1} alt="Neida Shop" />
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

      <div className="about-content">
        <h2>Sobre Neida Shop</h2>
        <p className="about-quote">
          Neida Shop es el resultado del esfuerzo y pasión de Neida Díaz,
          dedicada a ofrecer productos variados que abarcan desde fast food
          hasta calzado de calidad.
        </p>
        <p>
          Neida Shop se ha consolidado como una tienda pensada para satisfacer a
          todos los gustos, desde adultos hasta los más pequeños. Con una
          selección de productos para cada necesidad, promovemos calidad,
          accesibilidad y estilo en cada categoría.
        </p>
        <p className="about-emphasis">
          Con Neida Shop, más que productos, encuentras calidad y dedicación.
        </p>
        <div className="button-container">
          <button className="comprar-button">Comprar</button>
        </div>
      </div>
    </div>
  );
}

export default About;
