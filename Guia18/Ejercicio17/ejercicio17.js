/*Realizar un programa que elimine los dos últimos elementos de un array. Mostrar el
resultado*/

function eliminarDosElementos(array) {
    array.splice(-2);
    return array;
}
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let resultado = eliminarDosElementos(array);
alert(resultado)
