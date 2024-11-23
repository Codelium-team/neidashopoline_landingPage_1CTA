import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, NavLink } from "react-router-dom";
import logo from "../../public/logo.svg";
import "./Navbar.css";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const handleLinkClick = () => {
    if (isDropdownOpen) {
      setIsDropdownOpen(false); // Close the dropdown when a link is clicked
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Neida Shop Logo" className="navbar-logo" />
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
                aria-expanded={isDropdownOpen ? "true" : "false"}
                onClick={toggleDropdown}
              >
                Categorías
              </NavLink>
              <ul
                className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "dropdown-item active-link" : "dropdown-item"
                    }
                    to="/categories?category=Comida%20Rápida"
                    onClick={handleLinkClick}
                  >
                    Fast Food (Comida Rápida)
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "dropdown-item active-link" : "dropdown-item"
                    }
                    to="/categories?category=Belleza"
                    onClick={handleLinkClick}
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
                    to="/categories?category=Belleza"
                    onClick={handleLinkClick}
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
                    to="/categories?category=Belleza"
                    onClick={handleLinkClick}
                  >
                    Mujer
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "dropdown-item active-link" : "dropdown-item"
                    }
                    to="/categories?category=Calzado"
                    onClick={handleLinkClick}
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
                    to="/categories?category=Calzado"
                    onClick={handleLinkClick}
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
                    to="/categories?category=Calzado"
                    onClick={handleLinkClick}
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
