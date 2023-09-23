let texto = document.getElementById("texto");

let textoObtenido = texto.textContent;

let textoArray = textoObtenido.split(" ");

let resultado = textoArray.map(function (palabra) {
    if (palabra.length === 8) {
        return `<span style="background-color: yellow;">${palabra}</span>`;
    } else {
        return palabra;
    }
});
    
texto.innerHTML=resultado.join(" ")