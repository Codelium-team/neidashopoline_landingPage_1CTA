import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Neida
        </Link>
        {/* TODO: agregar icono */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link" to="/">
              Inicio
            </Link>
            <Link className="nav-link" to="/about">
              Acerca de
            </Link>
            <Link className="nav-link" to="/categories">
              Categorías
            </Link>
            <Link className="nav-link" to="/store">
              Tienda
            </Link>
            <Link className="nav-link" to="/contact">
              Contacto
            </Link>
            {/* <span className="nav-link disabled">Disabled</span> */}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
