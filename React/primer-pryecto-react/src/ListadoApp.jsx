const Items = ({ nombre, visto }) => {
  return (
    <li>
      {nombre}
      {visto ? `✅` : `⛔`}
    </li>
  );
};
const ListadoApp = () => {
  return (
    <>
      <h1>Listadon de temas del curso</h1>
      <ol>
        <Items nombre="Instalaciones necesarias" visto={true}></Items>
        <Items nombre="Uso de Vite" visto={true}></Items>
        <Items nombre="Componentes" visto={true}></Items>
        <Items nombre="Variables JSX" visto={true}></Items>
        <Items nombre="Props" visto={true}></Items>
        <Items nombre="Eventos" visto={true}></Items>
        <Items nombre="UseState" visto={true}></Items>
        <Items nombre="Redux" visto={false}></Items>
        <Items nombre="customHooks" visto={false}></Items>
      </ol>
    </>
  );
};

export default ListadoApp;
