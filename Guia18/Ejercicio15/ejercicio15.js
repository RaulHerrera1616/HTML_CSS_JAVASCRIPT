/*Escribe un programa JavaScript para calcular el área y el perímetro de un objeto Círculo
con la propiedad radio. Nota: Cree dos métodos para calcular el área y el perímetro. El
radio del círculo lo proporcionará el usuario.
*/
function Circulo(radio) {
    this.radio = radio;
    
    this.perimetroCirculo = function(){
        return 2 * Math.PI * this.radio;
    }
    this.areaCirculo = function() {
        return Math.PI * this.radio**2;
    }
}
const radio = parseInt(prompt("Ingrese el radio del círculo"));
const circulo = new Circulo(radio);
const perimetro = circulo.perimetroCirculo();
const area = circulo.areaCirculo();
alert("Area del Circulo: "+ area);
alert("Peimetro del Circulo: "+ perimetro); 
