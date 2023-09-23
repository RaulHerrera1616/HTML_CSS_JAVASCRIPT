/*Escriba una función de JavaScript para obtener los valores de Nombre y Apellido del
siguiente formulario.*/
function getFormValores() {

    let nombre = document.getElementById("form1").nombre.value;

    let apellido = document.getElementById("form1").apellido.value;
    // Mostrar los valores en la consola (puedes hacer lo que quieras con estos valores)
    console.log("Nombre:", nombre);
    console.log("Apellido:", apellido);
    let res = document.getElementById("resultado");
    res.textContent = `Nombre: ${nombre}  Apellido: ${apellido}`
    event.preventDefault();

};
