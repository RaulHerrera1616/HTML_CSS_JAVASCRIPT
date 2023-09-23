/*Realizar un programa que obtenga la siguiente matriz [[3], [6], [9], [12], [15]] y devuelve y
muestre el siguiente array [6, 9, 12, 15, 18].*/
var matrizOriginal = [[3], [6], [9], [12], [15]];
var matriz1 = matrizOriginal.flat();
alert(matriz1)
var matriz2 = matriz1.map(function(x){
    return x + 3;
})
alert(matriz2)