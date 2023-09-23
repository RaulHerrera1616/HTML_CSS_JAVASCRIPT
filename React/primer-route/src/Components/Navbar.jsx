import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to={"/"} className="nav-link " aria-current="page" href="#">Inicio</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={"/Productos"} className="nav-link" href="#">Productos</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={"/Otros"} className="nav-link" href="#">Otros</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={"/Login"}  className="nav-link " aria-disabled="true">Login</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar
