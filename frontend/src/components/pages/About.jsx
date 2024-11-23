import React, { useState } from "react";
import "./About.css";
import categoryImage1 from "../../assets/Foto_Neida_C.png";
import { ENDPOINT } from "../../config/constants";
import Swal from "sweetalert2";

function About() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      Swal.fire({
        icon: "error",
        title: "Correo inválido",
        text: "Por favor, ingresa un correo electrónico válido.",
      });
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
        Swal.fire({
          icon: "success",
          title: "¡Éxito!",
          text: "¡Gracias por unirte a nuestro newsletter!",
        });
        setEmail("");
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: data.message || "Ocurrió un error al enviar tu correo.",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Hubo un error al intentar enviar tu correo.",
      });
    }
  };

  return (
    <div className="container-fluid about-section d-flex align-items-center justify-content-center">
      <div className="row w-100 align-items-center">
        {/* Image Section */}
        <div className="col-md-4 mb-4 mb-md-0 about-image-container">
          <img src={categoryImage1} alt="Neida Díaz" className="about-image" />
        </div>

        {/* Content Section */}
        <div className="col-md-8 text-start">
          {" "}
          <h2 className="text-primary-main">Sobre Neida Shop</h2>
          <p className="fst-italic ">
            Neida Shop es el resultado del esfuerzo y pasión de{" "}
            <strong>Neida Díaz</strong>, dedicada a ofrecer productos variados
            que abarcan desde fast food hasta calzado de calidad.
          </p>
          <p>
            Neida Shop se ha consolidado como una tienda pensada para satisfacer
            a todos los gustos, desde adultos hasta los más pequeños. Con una
            selección de productos para cada necesidad, promovemos calidad,
            accesibilidad y estilo en cada categoría.
          </p>
          <p className="fw-bold fst-italic text-secondary">
            Con Neida Shop, más que productos, encuentras calidad y dedicación.
          </p>
          {/* Newsletter Form */}
          <div className="mt-4">
            <p className="fst-italic">
              ¡Únete a nuestro newsletter y recibe nuestras últimas promociones
              y productos en tu correo electrónico!
            </p>
            <form
              onSubmit={handleSubmit}
              className="d-flex flex-column align-items-center"
            >
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="form-control"
                style={{ width: "80%" }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: "fit-content", padding: "0.5rem 1rem" }}
              >
                Recibe nuestro catálogo
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
