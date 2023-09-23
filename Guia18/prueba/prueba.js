class animal{
    constructor(especie,edad,color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
    }
} 
let perro = new animal("perro",5,"rojo");
let gato = new animal("gato",3,"negro");
let loro = new animal("pajaro",2,"verde"); 
document.write(perro.info + "<br>")  
document.write(gato.info + "<br>")
document.write(loro.info + "<br>")
miFecha=new Date(2023,0,30)
document.write(miFecha)
