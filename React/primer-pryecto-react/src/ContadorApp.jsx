import React, { useState } from 'react'

export const ContadorApp = () => {
    const [click, setClick ] = useState(0);
    const handleClick =() =>{
        setClick(click + 1)    }
  return (
    <>
    <h1>Contador: </h1>
    <p>{click}</p>
    <button onClick={handleClick}>
        Soy un boton
    </button>
    </>
  )
}


