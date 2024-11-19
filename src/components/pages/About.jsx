import React from "react";
import "./About.css";
import categoryImage1 from "../../assets/Foto_Neida_C.png";

function About() {
  return (
    <div className="about-section">
      <div className="about-image">
        <img src={categoryImage1} alt="Neida Díaz" />
      </div>

      <div className="about-content">
        <h2>Sobre Neida Shop</h2>
        <p className="about-quote">
          Neida Shop es el resultado del esfuerzo y pasión de
          <strong> Neida Díaz</strong>, dedicada a ofrecer productos variados
          que abarcan desde fast food hasta calzado de calidad.
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

        {/* Newsletter Form */}
        <div className="newsletter-container">
          <form className="newsletter-form">
            <p className="about-quote">
              ¡Únete a nuestro newsletter y recibe nuestras últimas promociones
              y productos en tu correo electrónico!
            </p>
            <div className="form-group">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-button">
                Recibe nuestro catálogo
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default About;
