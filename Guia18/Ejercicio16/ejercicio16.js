/*Realizar un programa que rellene dos vectores al mismo tiempo, con 5 valores aleatorios
y los muestre por pantalla.*/
function rellenaVectores(longitud) {
    const vector1 = [];
    const vector2 =[];
    for (let i = 0; i < longitud; i++) {
        const numeroaleatorio = Math.round(Math.random()*100 +1);
        vector1.push(numeroaleatorio);
        vector2.push(numeroaleatorio);        
    }
    return {vector1, vector2};
}
const longitud=5;
const {vector1, vector2} = rellenaVectores(longitud);
alert("Vector 1: [" + vector1 + "]" +"\n"+ "Vector 2: [" + vector2 + "] ");
