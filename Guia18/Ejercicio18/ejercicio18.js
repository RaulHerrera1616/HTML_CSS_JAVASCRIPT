/*A partir del siguiente array: var valores = [true, 5, false, "hola", "adios", 2]:
a) Determinar cual de los dos elementos de texto es mayor
b) Utilizando exclusivamente los dos valores booleanos del array, determinar los
operadores necesarios para obtener un resultado true y otro resultado false
c) Determinar el resultado de las cinco operaciones matemáticas realizadas con los
dos elementos numéricos*/
var valores = [true, 5, false, "hola", "adios", 2];
function palabraMasLarga(palabraMayor) {
    palabraMayor = "";
    for (let i = 0; i < valores.length; i++) {
        if (typeof valores[i] === "string" && valores[i].length > palabraMayor.length) {
            palabraMayor = valores[i];
        }
    }
    return palabraMayor;
}

let resultadoTrue = valores[0] || valores[2];
let resultadoFalse = valores[0] && valores[2];

var suma=0;
var resta=0;
var multi=1;
var divi=1;
for (let i = 0; i < valores.length; i++) {
    if (typeof valores[i] === "number") {
        suma +=valores[i];
        if (resta == 0) {
            resta=valores[i];
        }else{
            resta-=valores[i];
        }
        multi *=valores[i];
        divi /=valores[i];
    }
    
}

alert("El elmento de texto mayor es: " + palabraMasLarga());
alert("Resultado true con operador ||: " + resultadoTrue);
alert("Resultado false con operador &&: " + resultadoFalse);
alert("La suma es: " + suma);
alert("La resta es: " + resta);
alert("La multiplicacion es: " + multi);
alert("La division es: " + divi);
