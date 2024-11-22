import React, { useState } from "react";
import "./About.css";
import categoryImage1 from "../../assets/Foto_Neida_C.png";
import { ENDPOINT } from "../../config/constants";

function About() {
  const [email, setEmail] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate email
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setResponseMessage("Por favor, ingresa un correo electrónico válido.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("email", email);

      const response = await fetch(ENDPOINT.submitEmail, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.status === "success") {
        setResponseMessage("¡Gracias por unirte a nuestro newsletter!");
        setEmail("");
      } else {
        setResponseMessage(
          data.message || "Ocurrió un error al enviar tu correo."
        );
      }
    } catch (error) {
      setResponseMessage("Hubo un error al intentar enviar tu correo.");
    }
  };

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
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <p className="about-quote">
              ¡Únete a nuestro newsletter y recibe nuestras últimas promociones
              y productos en tu correo electrónico!
            </p>
            <div className="form-group">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="newsletter-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="newsletter-button">
                Recibe nuestro catálogo
              </button>
            </div>
          </form>

          {/* Response Message */}
          {responseMessage && (
            <p className="response-message">{responseMessage}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default About;
