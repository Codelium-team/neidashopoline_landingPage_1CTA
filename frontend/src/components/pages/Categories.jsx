import React, { useEffect } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useLocation } from "react-router-dom";
import "./Categories.css";
import comidaImg from "../../assets/pranav-kumar-jain-RkGKrMMRED4-unsplash.png";
import bellezaImg from "../../assets/content-pixie-9l7r-n1zt-Y-unsplash.png";
import calzadoImg from "../../assets/products/02.jpg";
import img02 from "../../assets/products/02.jpg";
import img03 from "../../assets/products/03.jpg";
import img04 from "../../assets/products/04.jpg";
import img05 from "../../assets/products/05.jpg";
import img06 from "../../assets/products/06.jpg";
import img07 from "../../assets/products/07.jpg";

const MySwal = withReactContent(Swal);

function Categories() {
  const location = useLocation();

  useEffect(() => {
    const category = new URLSearchParams(location.search).get("category");

    if (category) {
      handleViewMore(category);
    }
  }, [location]);
  const handleViewMore = (category) => {
    let title, htmlContent, link;

    switch (category) {
      case "Comida Rápida":
        title = "Comida Rápida";
        htmlContent = `
        <p style="text-align: left;">
          Descubre nuestros deliciosos hand rolls, hechos con ingredientes frescos y de alta calidad.
          Perfectos para disfrutar en cualquier momento.
        </p>
      `;
        link = "/contact";
        break;

      case "Belleza":
        title = "Belleza Hombre y Mujer";
        htmlContent = `
        <p style="text-align: left;">
          Realza tu estilo con nuestros productos de belleza, ideales para el cuidado personal y maquillaje que destacan tu esencia única.
        </p>
        <p style="text-align: left;">
          Explora nuestras líneas exclusivas para hombres y mujeres, adaptadas a tus necesidades.
        </p>
                <hr>
          <h3>Hombre</h3>
          <h3>Mujer</h3>
          <h3>Precios</h3>
      `;
        link = "/contact";
        break;

      case "Calzado":
        title = "Calzado Adultos y Niños";
        htmlContent = `
        <p style="text-align: left;">
          Encuentra el calzado perfecto para toda la familia. Nuestros productos combinan estilo y comodidad, disponibles en diferentes tallas y diseños.
        </p>
        <div style="margin-bottom: 20px;">
        <hr>
          <h3>Adultos</h3>
          <img src=${img02} alt="Botas para hombres" style="width: 100%; height: auto; margin-bottom: 10px;" />
          <p style="text-align: left;">Botas para hombre, tallas desde la 39 a la 44.</p>
          <img src=${img03} alt="Botas para hombres" style="width: 100%; height: auto; margin-bottom: 10px;" />
          <p style="text-align: left;">Botas para hombre, tallas desde la 39 a la 44.</p>
          <img src=${img04} alt="Botas para mujeres" style="width: 100%; height: auto; margin-bottom: 10px;" />
          <p style="text-align: left;">Botas para mujer, tallas desde la 36 a la 39.</p>
          <img src=${img05} alt="Botas para mujeres" style="width: 100%; height: auto; margin-bottom: 10px;" />
          <p style="text-align: left;">Botas para mujer, tallas desde la 36 a la 40.</p>
        </div>
        <div style="margin-bottom: 20px;">
          <h3>Niños</h3>
          <img src=${img06} alt="Zapatillas para niñas" style="width: 100%; height: auto; margin-bottom: 10px;" />
          <p style="text-align: left;">Zapatillas para niñas, tallas desde la 31 a la 35.</p>
        </div>
        <h3 style="text-align: left;">Precios</h3>
        <ul style="text-align: left; list-style-type: none; padding: 0;">
          <li><strong>Hombre:</strong> $19.990</li>
          <li><strong>Mujer:</strong> $14.990</li>
          <li><strong>Niña:</strong> $8.990</li>
        </ul>
      `;
        link = "/contact";
        break;

      default:
        title = "Categoría desconocida";
        htmlContent = `
        <p style="text-align: left;">Por favor selecciona una categoría válida.</p>
      `;
        link = "/contact";
    }

    MySwal.fire({
      title,
      html: htmlContent,
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: "Contactar",
      cancelButtonText: "Cerrar",
      customClass: {
        popup: "custom-swal-popup",
        actions: "custom-swal-actions",
      },
      preConfirm: () => {
        window.location.href = link;
      },
    });
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4 text-primary-main">Categorías</h1>

      <div className="row gy-4 mb-5">
        {/* Card 1: Comida Rápida */}
        <div className="col-sm-6 col-lg-4">
          <div className="card category-card h-100">
            <img
              src={comidaImg}
              className="card-img-top img-fluid"
              alt="Comida Rápida"
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Comida Rápida</h5>
              <p className="card-text">
                Rápido y delicioso: nuestros hand rolls están hechos para
                conquistar tu paladar.
              </p>
              <button
                className="btn btn-primary mt-auto"
                onClick={() => handleViewMore("Comida Rápida")}
              >
                Ver más
              </button>
            </div>
          </div>
        </div>

        {/* Card 2: Belleza Hombre y Mujer */}
        <div className="col-sm-6 col-lg-4">
          <div className="card category-card h-100">
            <img
              src={bellezaImg}
              className="card-img-top img-fluid"
              alt="Belleza Hombre y Mujer"
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Belleza Hombre y Mujer</h5>
              <p className="card-text">
                Productos de belleza pensados para resaltar tu esencia y estilo
                único.
              </p>
              <button
                className="btn btn-primary mt-auto"
                onClick={() => handleViewMore("Belleza")}
              >
                Ver más
              </button>
            </div>
          </div>
        </div>

        {/* Card 3: Calzado Adultos y Niños */}
        <div className="col-sm-6 col-lg-4">
          <div className="card category-card h-100">
            <img
              src={calzadoImg}
              className="card-img-top img-fluid"
              alt="Calzado Adultos y Niños"
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Calzado Adultos y Niños</h5>
              <p className="card-text">
                Estilo y comodidad para cada paso, sin importar la edad.
              </p>
              <button
                className="btn btn-primary mt-auto"
                onClick={() => handleViewMore("Calzado")}
              >
                Ver más
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
