const limite = parseInt(prompt("Ingresa el valor límite positivo:"));
let suma = 0;

while (suma <= limite) {
  const numero = parseFloat(prompt("Ingresa un número:"));

  if (isNaN(numero)) {
    alert("¡Ingresa un número válido!");
    continue;
  }

  suma += numero;
}

alert("¡La suma ha superado el límite!");