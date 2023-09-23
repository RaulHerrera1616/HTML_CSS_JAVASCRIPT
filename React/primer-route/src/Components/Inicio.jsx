import React from 'react'
import './styleInicio.css';


const Inicio = () => {
  return (
    <div>
      <header className='titulo'>
        <h1>Tienda de Ropa</h1>
    </header>
    <section class="contenedor">

        <div class="contenedor-items">
            <div class="item">
                <span class="titulo-item">Rompeviento</span>
                <img src="/src/Imagenes/CamperaRompeviento.jpeg" alt="" class="img-item"/>
                <span class="precio-item">$15.000</span>
                <button class="boton-item">Agregar al Carrito</button>
            </div>
            <div class="item">
                <span class="titulo-item">Buzo de Lana Rosa</span>
                <img src="/src/Imagenes/Buzo.jpeg" alt="" class="img-item"/>
                <span class="precio-item">$25.000</span>
                <button class="boton-item">Agregar al Carrito</button>
            </div>
            <div class="item">
                <span class="titulo-item">Buzo de lana gris</span>
                <img src="/src/Imagenes/Buzo1.jpeg" alt="" class="img-item"/>
                <span class="precio-item">$35.000</span>
                <button class="boton-item">Agregar al Carrito</button>
            </div>
            <div class="item">
                <span class="titulo-item">Calzas </span>
                <img src="/src/Imagenes/Calzas.jpeg" alt="" class="img-item"/>
                <span class="precio-item">$18.000</span>
                <button class="boton-item">Agregar al Carrito</button>
            </div>
            <div class="item">
                <span class="titulo-item">Calzas Cortas</span>
                <img src="/src/Imagenes/CalzasCortas.jpeg" alt="" class="img-item"/>
                <span class="precio-item">$32.000</span>
                <button class="boton-item">Agregar al Carrito</button>
            </div>
            <div class="item">
                <span class="titulo-item">Conjunton Deportivo</span>
                <img src="/src/Imagenes/ConjuntoDeportivo1.jpeg" alt="" class="img-item"/>
                <span class="precio-item">$18.000</span>
                <button class="boton-item">Agregar al Carrito</button>
            </div>
            <div class="item">
                <span class="titulo-item">Conjunto de portivo corto</span>
                <img src="/src/Imagenes/ConjuntoDeportivos.jpeg" alt="" class="img-item"/>
                <span class="precio-item">$54.000</span>
                <button class="boton-item">Agregar al Carrito</button>
            </div>
            <div class="item">
                <span class="titulo-item">Joguer</span>
                <img src="/src/Imagenes/Joguer.jpeg" alt="" class="img-item"/>
                <span class="precio-item">$32.000</span>
                <button class="boton-item">Agregar al Carrito</button>
            </div>
            <div class="item">
                <span class="titulo-item">Palazos</span>
                <img src="/src/Imagenes/Palazos.jpeg" alt="" class="img-item"/>
                <span class="precio-item">$42.800</span>
                <button class="boton-item">Agregar al Carrito</button>
            </div>
            <div class="item">
                <span class="titulo-item">Pantalon Peluches</span>
                <img src="/src/Imagenes/PantalonesPeluche.jpeg" alt="" class="img-item"/>
                <span class="precio-item">$42.800</span>
                <button class="boton-item">Agregar al Carrito</button>
            </div>
            <div class="item">
                <span class="titulo-item">Remeras</span>
                <img src="/src/Imagenes/Remeras.jpeg" alt="" class="img-item"/>
                <span class="precio-item">$42.800</span>
                <button class="boton-item">Agregar al Carrito</button>
            </div>
            <div class="item">
                <span class="titulo-item">Short</span>
                <img src="/src/Imagenes/Short.jpeg" alt="" class="img-item"/>
                <span class="precio-item">$42.800</span>
                <button class="boton-item">Agregar al Carrito</button>
            </div>
        </div>
        
        <div class="carrito" id="carrito">
            <div class="header-carrito">
                <h2>Tu Carrito</h2>
            </div>

            <div class="carrito-items">
                
                <div class="carrito-item">
                    <img src="img/boxengasse.png" width="80px" alt=""/>
                    <div class="carrito-item-detalles">
                        <span class="carrito-item-titulo">Box Engasse</span>
                        <div class="selector-cantidad">
                            <i class="fa-solid fa-minus restar-cantidad"></i>
                            <input type="text" value="1" class="carrito-item-cantidad" disabled/>
                            <i class="fa-solid fa-plus sumar-cantidad"></i>
                        </div>
                        <span class="carrito-item-precio">$15.000,00</span>
                    </div>
                   <span class="btn-eliminar">
                        <i class="fa-solid fa-trash"></i>
                   </span>
                </div>
                <div class="carrito-item">
                    <img src="img/skinglam.png" width="80px" alt=""/>
                    <div class="carrito-item-detalles">
                        <span class="carrito-item-titulo">Skin Glam</span>
                        <div class="selector-cantidad">
                            <i class="fa-solid fa-minus restar-cantidad"></i>
                            <input type="text" value="3" class="carrito-item-cantidad" disabled/>
                            <i class="fa-solid fa-plus sumar-cantidad"></i>
                        </div>
                        <span class="carrito-item-precio">$18.000,00</span>
                    </div>
                   <button class="btn-eliminar">
                        <i class="fa-solid fa-trash"></i>
                   </button>
                </div>
                 
            </div>
            <div class="carrito-total">
                <div class="fila">
                    <strong>Tu Total</strong>
                    <span class="carrito-precio-total">
                        $120.000,00
                    </span>
                </div>
                <button class="btn-pagar">Pagar <i class="fa-solid fa-bag-shopping"></i> </button>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Inicio
