import React, { useState } from "react";
import Swal from "sweetalert2";
import "./Contact.css";
import { ENDPOINT } from "../../config/constants";

const Contact = () => {
  // Form state
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate email
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      Swal.fire({
        icon: "error",
        title: "Correo inválido",
        text: "Por favor, ingresa un correo electrónico válido.",
      });
      return;
    }

    // Validate subject
    if (!formData.asunto) {
      Swal.fire({
        icon: "error",
        title: "Asunto no seleccionado",
        text: "Por favor, selecciona un asunto para tu mensaje.",
      });
      return;
    }

    // Validate message body
    if (!formData.mensaje.trim()) {
      Swal.fire({
        icon: "error",
        title: "Mensaje vacío",
        text: "El mensaje no puede estar vacío.",
      });
      return;
    }

    try {
      const response = await fetch(ENDPOINT.submitContact, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData),
      });

      const result = await response.json();

      if (result.status === "success") {
        Swal.fire({
          icon: "success",
          title: "¡Mensaje enviado!",
          text: "Tu mensaje se ha enviado exitosamente.",
        });
        setFormData({
          nombre: "",
          email: "",
          asunto: "",
          mensaje: "",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: result.message || "Hubo un error al enviar el mensaje.",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error de red",
        text: "Por favor, intenta de nuevo más tarde.",
      });
    }
  };

  return (
    <div className="container my-5">
      <div className="row">
        {/* Left Side: Text Content */}
        <div className="col-md-6 left-text-content">
          <h1 className="text-primary-main">Estamos Aquí para Ayudarte</h1>
          <p className="text-dark">
            Bienvenido a la sección de contacto de Neida Shop. Queremos resolver
            todas tus dudas y brindarte el mejor servicio.
          </p>
          <p className="text-dark">
            Por favor, completa el formulario para enviarnos tus comentarios o
            preguntas. Selecciona el motivo de tu mensaje para que nuestro
            equipo pueda asistirte de forma rápida y precisa.
          </p>
          <p className="text-dark">
            Si prefieres contactarnos de forma directa, puedes llamarnos o
            escribirnos a:
          </p>
          <p className="text-dark">
            Teléfono: <strong>+123 456 7890</strong>
          </p>
          <p className="text-dark">
            Correo electrónico: <strong>contacto@neidashop.com</strong>
          </p>
        </div>

        {/* Right Side: Contact Form */}
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <h2 className="text-primary-main">Formulario de Contacto</h2>
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label text-dark">
                Nombre
              </label>
              <input
                type="text"
                className="form-control"
                id="nombre"
                placeholder="Tu nombre completo"
                value={formData.nombre}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label text-dark">
                Correo Electrónico
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Tu correo electrónico"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="asunto" className="form-label text-dark">
                Asunto
              </label>
              <select
                className="form-select"
                id="asunto"
                value={formData.asunto}
                onChange={handleChange}
              >
                <option value="">Selecciona el asunto</option>
                <option value="pregunta">Pregunta</option>
                <option value="sugerencia">Sugerencia</option>
                <option value="problema">Problema</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="mensaje" className="form-label text-dark">
                Mensaje
              </label>
              <textarea
                className="form-control"
                id="mensaje"
                rows="4"
                placeholder="Escribe tu mensaje"
                value={formData.mensaje}
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary-main">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
