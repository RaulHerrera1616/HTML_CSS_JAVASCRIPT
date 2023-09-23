import React from 'react'
import './styleProductos.css'

const Productos = () => {
  return (
    <div> 
      
      <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://blogthinkbig.com/wp-content/uploads/sites/4/2020/02/animales-mas-grandes.jpg?fit=1800%2C665" className="d-block img-fluid full-screen-image" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://images.unsplash.com/photo-1512850183-6d7990f42385?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGZ1bGwlMjBzY3JlZW4lMjB3YWxscGFwZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" className="d-block img-fluid full-screen-image" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://images.unsplash.com/photo-1502899576159-f224dc2349fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80" className="d-block img-fluid full-screen-image" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://images.unsplash.com/photo-1561571994-3c61c554181a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZnVsbCUyMHNjcmVlbiUyMHdhbGxwYXBlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" className="d-block img-fluid full-screen-image" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZ1bGwlMjBzY3JlZW4lMjB3YWxscGFwZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" className="d-block img-fluid full-screen-image" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://images.unsplash.com/photo-1502943693086-33b5b1cfdf2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZ1bGwlMjBzY3JlZW4lMjB3YWxscGFwZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" className="d-block img-fluid full-screen-image" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Productos
