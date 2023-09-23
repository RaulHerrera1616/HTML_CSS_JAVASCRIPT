import React, { useState } from 'react'
import './StyleCont.css'

const Contador = () => {
    const [click, setclick] = useState(0);
    const handleClik = ()=> {
        setclick(click + 1)
    }
  return (
    <div className="container">
      <h1>Contador:</h1>
      <p>{click}</p>
      <button onClick={handleClik}>Boton</button>
    </div>
  )
}

export default Contador
