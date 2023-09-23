/*Escribir un programa para obtener un array de las propiedades de un objeto Persona.
Las propiedades son nombre, edad, sexo ('H' hombre, 'M' mujer, 'O' otro), peso y altura.*/
// Definir el objeto Persona
var persona = {
    nombre: 'Juan',
    edad: 30,
    sexo: 'H',
    peso: 70,
    altura: 175
};
    var propiedades = Object.keys(persona);
console.log(propiedades);
  /*var array = [];
array.push(persona.nombre,persona.edad,persona.sexo,persona.peso,persona.altura);
console.log(array);*/