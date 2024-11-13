import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Neida Shop
        </Link>
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
          <div className="navbar-nav ms-auto">
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link active-link" : "nav-link"
              }
              to="/"
            >
              Inicio
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link active-link" : "nav-link"
              }
              to="/about"
            >
              Acerca de
            </NavLink>
            <div className="nav-item dropdown">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "nav-link dropdown-toggle active-link"
                    : "nav-link dropdown-toggle"
                }
                to="/categories"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categorías
              </NavLink>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "dropdown-item active-link" : "dropdown-item"
                    }
                    to="/categories"
                  >
                    Fast Food (Comida Rápida)
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "dropdown-item active-link" : "dropdown-item"
                    }
                    to="/categories"
                  >
                    Artículos de Belleza
                  </NavLink>
                </li>
                <li className="subcategory">
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "dropdown-item active-link small text-muted"
                        : "dropdown-item small text-muted"
                    }
                    to="/categories"
                  >
                    Hombre
                  </NavLink>
                </li>
                <li className="subcategory">
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "dropdown-item active-link small text-muted"
                        : "dropdown-item small text-muted"
                    }
                    to="/categories"
                  >
                    Mujer
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "dropdown-item active-link" : "dropdown-item"
                    }
                    to="/categories"
                  >
                    Calzado
                  </NavLink>
                </li>
                <li className="subcategory">
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "dropdown-item active-link small text-muted"
                        : "dropdown-item small text-muted"
                    }
                    to="/categories"
                  >
                    Adultos
                  </NavLink>
                </li>
                <li className="subcategory">
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "dropdown-item active-link small text-muted"
                        : "dropdown-item small text-muted"
                    }
                    to="/categories"
                  >
                    Niños
                  </NavLink>
                </li>
              </ul>
            </div>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link active-link" : "nav-link"
              }
              to="/store"
            >
              Tienda
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link active-link" : "nav-link"
              }
              to="/contact"
            >
              Contacto
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
