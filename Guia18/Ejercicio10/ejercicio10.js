const palabraInvertida = (palabra) => {
    
    const palArreglo = palabra.split("");//convierte la palabra en un arreglo
    const arregloInvertido=palArreglo.reverse();//Invierte el arreglo
    const palabraInvertida = arregloInvertido.join("");//Convierte en una cadena el arreglo
    return palabraInvertida;
}
palabra = prompt("Ingrese una palabra");
const palaAlReves=palabraInvertida(palabra);
alert(palaAlReves);
