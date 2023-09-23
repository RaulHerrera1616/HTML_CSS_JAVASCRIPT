const frase = prompt("Ingrese una frase");
let fraConEspacio = "";
for (let i = 0; i < frase.length; i++) {
    fraConEspacio += frase.substring(i,i + 1) + " ";

}
alert(fraConEspacio);