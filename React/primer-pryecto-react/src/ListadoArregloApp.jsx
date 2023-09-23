import { useState } from "react"
import { AgregarTarea } from "./components/AgregarTarea"
const Item = ({nombre, visto})=>{
    return(
        <li>{nombre}
        {visto ? `✅` : `⛔`}
        </li>
    )
}
export const ListadoArregloApp = () => {
  const agregar = ()=>{
    /* const [inputValue, setInputValue] = useState(""); */ // Estado para el valor del input
    setArreglo([...arreglo, {nombre:`Nuevo`, visto: true }])
  }
    let listadoSecciones =[
        {id: 1,nombre:`Instalaciones necesarias`, visto: true},
        {id: 2,nombre:`Uso de Vite`, visto: true},
        {id: 3,nombre:`Componentes`, visto: true},
        {id: 4,nombre:`Variables JSX`, visto: true},
        {id: 5,nombre:`Props`, visto: true},
        {id: 6,nombre:`Eventos`, visto: true},
        {id: 7,nombre:`UseState`, visto: true},
        {id: 8,nombre:`Redux`, visto: false},
        {id: 9,nombre:`CustomHooks`, visto: false}
    ]
    const [arreglo, setArreglo] = useState(listadoSecciones);
    
    const onAgregarTarea = (val) =>{
      let valor = val.trim();
      if (valor < 1) return ;
      const envio ={
        id: arreglo.length +1,
        nombre: valor,
        visto: false
      }
      setArreglo ([...arreglo, envio]);
    }
  return (
    <>
      <h1>Listadon de temas del curso</h1>
      <AgregarTarea agregarTarea={onAgregarTarea}></AgregarTarea>
      <ol>
        {arreglo.map(arre =><Item key={arre.id} nombre={arre.nombre} visto={arre.visto}></Item>)}
      </ol>
      

    </>
  )
}

