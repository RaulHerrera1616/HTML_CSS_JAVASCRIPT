/*Realizar un programa en Java donde se creen dos arreglos: el primero será un arreglo A
de 50 números reales, y el segundo B, un arreglo de 20 números, también reales. El
programa deberá inicializar el arreglo A con números aleatorios y mostrarlo por pantalla.
Luego, el arreglo A se debe ordenar de menor a mayor y copiar los primeros 10 números
ordenados al arreglo B de 20 elementos, y rellenar los 10 últimos elementos con el valor
0.5. Mostrar los dos arreglos resultantes: el ordenado de 50 elementos y el combinado
de 20.*/

function rellenarArregloA(arregloA, tamanio) {
    for (let i = 0; i < 50; i++) {
        numero=Math.random()*10; 
        arregloA.push(numero);        
    }
    return arregloA
}
function mostrarOrdenado(arregloA) {
    return arregloA.sort();
}
function copiarArreglo(arregloA) {
    const arregloB = arregloA.slice(0,10);
    for (let i = 0; i < 10; i++) {
        arregloB.push(0.5);     
    }
    return arregloB;
}
let arregloA = [];
let resultado = rellenarArregloA(arregloA, 50);
let mensaje = resultado.join("\n");
alert("["+mensaje+"]");
resultado1 = mostrarOrdenado(arregloA);
let mensaje1 = resultado1.join("\n");
alert("["+mensaje1+"]");
let resultado2 = copiarArreglo(arregloA);
let mensaje2 = resultado2.join("\n");
alert("["+mensaje2+"]");