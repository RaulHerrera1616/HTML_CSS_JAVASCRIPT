function palabraMasLarga(frase){
    const palabras = frase.split(" ");//Transformamos en un arreglo
    let palMasLarga = "";

    for (let i = 0; i < palabras.length; i++) {
        if (palabras[i].length > palMasLarga.length) {
            palMasLarga = palabras[i];
        }    
    }
    return palMasLarga;
}
frase = prompt("Ingrese la frase");
const resul = palabraMasLarga(frase);
alert("La palabra mas larga de la frase es: " + resul);