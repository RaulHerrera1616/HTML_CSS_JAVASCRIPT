import { useState } from "react"

export const AgregarTarea = ({agregarTarea}) => {//recive del padre agregarTarea
   const [inputValue, setInputValue] = useState('')
   const onInputChange = (event)=>{//setea el nuevo valor del estado
        setInputValue(event.target.value)//para que se pueda escribir
   }
   const onSubmit = (event) => {
    event.preventDefault()//Para que no se actualice la pagina
    agregarTarea(inputValue)
   }
  return (
    <form onSubmit={onSubmit}>
        <input 
            type="text" 
            placeholder="Ingresá tarea nueva"
            value={inputValue}
            onChange={onInputChange}//Escucha evento de cambio
        />
    </form>
  )
}

