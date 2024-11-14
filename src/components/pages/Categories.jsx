import React from "react";
import "./Categories.css";
import comidaImg from "../../assets/pranav-kumar-jain-RkGKrMMRED4-unsplash.png";
import bellezaImg from "../../assets/content-pixie-9l7r-n1zt-Y-unsplash.png";
import calzadoImg from "../../assets/products/02.jpg";
/* TODO: Falta atribuir las imagenes */

function Categories() {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4 text-primary-main">Categorías</h1>

      <div className="row">
        {/* Card 1: Comida Rápida */}
        <div className="col-md-4">
          <div className="card category-card">
            <img src={comidaImg} className="card-img-top" alt="Comida Rápida" />
            <div className="card-body">
              <h5 className="card-title">Comida Rápida</h5>
              <p className="card-text">
                Rápido y delicioso: nuestros hand rolls están hechos para
                conquistar tu paladar.
              </p>
              <p className="card-text">
                Tu comida rápida favorita, aquí y ahora. Disfruta de una
                experiencia única con nuestros sabores innovadores y frescos,
                pensados para satisfacer todos tus antojos.
              </p>
              <button className="btn btn-primary">Comprar</button>
            </div>
          </div>
        </div>

        {/* Card 2: Belleza Hombre y Mujer */}
        <div className="col-md-4">
          <div className="card category-card">
            <img
              src={bellezaImg}
              className="card-img-top"
              alt="Belleza Hombre y Mujer"
            />
            <div className="card-body">
              <h5 className="card-title">Belleza Hombre y Mujer</h5>
              <p className="card-text">
                Productos de belleza pensados para resaltar tu esencia y estilo
                único.
              </p>
              <p className="card-text">
                Belleza en cada detalle, para todos. Encuentra los mejores
                productos para resaltar tu naturaleza, desde cuidado de la piel
                hasta maquillaje, adaptados a tus necesidades.
              </p>
              <button className="btn btn-primary">Comprar</button>
            </div>
          </div>
        </div>

        {/* Card 3: Calzado Adultos y Niños */}
        <div className="col-md-4">
          <div className="card category-card">
            <img
              src={calzadoImg}
              className="card-img-top"
              alt="Calzado Adultos y Niños"
            />
            <div className="card-body">
              <h5 className="card-title">Calzado Adultos y Niños</h5>
              <p className="card-text">
                Estilo y comodidad para cada paso, sin importar la edad.
              </p>
              <p className="card-text">
                Encuentra el calzado perfecto para toda la familia, desde niños
                hasta adultos, diseñado para brindar confort y estilo en cada
                paso.
              </p>
              <button className="btn btn-primary">Comprar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
