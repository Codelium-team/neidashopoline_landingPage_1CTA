import React from "react";
import "./Contact.css";

const Contact = () => {
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
            equipo pueda asistirte de forma rápida y precisa. No dudes en
            detallar tus necesidades, estamos aquí para ayudarte.
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
          <form>
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
              />
            </div>
            <div className="mb-3">
              <label htmlFor="telefono" className="form-label text-dark">
                Teléfono
              </label>
              <input
                type="tel"
                className="form-control"
                id="telefono"
                placeholder="Tu número de teléfono"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="asunto" className="form-label text-dark">
                Asunto
              </label>
              <select className="form-select" id="asunto">
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
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary-main">
              Enviar
            </button>
          </form>

          <div className="mt-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
