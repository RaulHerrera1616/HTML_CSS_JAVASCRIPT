/*Escribir un programa de JavaScript que a través de un formulario calcule el radio de un
circulo y lo muestre en el HTML.*/
let boton = document.getElementById("boton");
boton.addEventListener("click", function (evento) { 
evento.preventDefault();
let diametro = parseFloat(document.getElementById("diam").value);
let radio = diametro/2;
let resultado = document.getElementById("res");
resultado.textContent = "El radio es: "+ radio.toFixed(2);

 });

