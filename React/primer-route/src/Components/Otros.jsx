import React from "react";

const Otros = () => {
  return (
    <div>
      <h1>Otros productos</h1>
      <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <svg
              className="bd-placeholder-img"
              width="100%"
              height="100%"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <rect width="100%" height="100%" fill="#777" />
            </svg>

            <div className="container">
              <div className="carousel-caption text-start">
                <h1>Producto 1</h1>
                <div class="item">
                <span class="titulo-item">Rompeviento</span>
                <img src="/src/Imagenes/CamperaRompeviento.jpeg" alt="" class="img-item"/>
                <span class="precio-item">$15.000</span>
                <button class="boton-item">Agregar al Carrito</button>
            </div>
                <p>
                  Lorem ipsum dolor sit
                </p>
                <p>
                  <a className="btn btn-lg btn-primary" href="#">
                    Boton
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <svg
              className="bd-placeholder-img"
              width="100%"
              height="100%"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <rect width="100%" height="100%" fill="#777" />
            </svg>

            <div className="container">
              <div className="carousel-caption">
                <h1>Producto 2</h1>
                <p>
                  Lorem ipsum dolor sit
                </p>
                <p>
                  <a className="btn btn-lg btn-primary" href="#">
                   Boton
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <svg
              className="bd-placeholder-img"
              width="100%"
              height="100%"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <rect width="100%" height="100%" fill="#777" />
            </svg>

            <div className="container">
              <div className="carousel-caption text-end">
                <h1>Producto 3</h1>
                <p>
                  Lorem ipsum dolor sit
                </p>
                <p>
                  <a className="btn btn-lg btn-primary" href="#">
                   Boton
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Que es esto</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Que es esto2</span>
        </button>
      </div>
    </div>
  );
};

export default Otros;
