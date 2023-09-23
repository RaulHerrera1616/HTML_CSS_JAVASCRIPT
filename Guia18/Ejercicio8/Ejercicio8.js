let num;
let max = Number.NEGATIVE_INFINITY;
let min = Number.POSITIVE_INFINITY;
let suma = 0;
let cantum = 0;
do {
    num = parseInt(prompt("Ingrese un numero (Ingrese 0 no desea ingresar mas numeros"))
    if (isNaN(num)) {
        alert("¡Ingresaste u valor no valido!")
    }
    if (num !== 0) {
        if (num > max) {
            max = num;
        }
        if (num < min) {
            min = num;
        }
        suma += num;
        cantum++;
    }

} while (num !== 0);
const promedio = suma / cantum;
alert("El numero promedio es: " + promedio);
alert("El numero maximo es: " + max)
alert("El numero minimo es: " + min)