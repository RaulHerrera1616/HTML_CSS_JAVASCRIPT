const PI = 3.14;
let radio=parseInt(prompt("Ingrese el valor del radio de la circunsferencia"));

let area = PI*radio**2;
let perimetro = 2*PI*radio;

alert(`El valor del area es ${area.toFixed(2)}`);
alert(`El valor del perimerto es ${perimetro.toFixed(2)}`);