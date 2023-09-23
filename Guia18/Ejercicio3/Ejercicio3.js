do {
    var edad = parseInt(prompt("Ingrese su edad"));
    if (!isNaN(edad)) {
        if (edad >= 18) {
            alert("Usted es mayor de edad");
        } else {
            alert("Usted es menor de edad");
        }
    } else {
        alert("Usted ingreso una edad no valida")
    }
} while (isNaN(edad));
