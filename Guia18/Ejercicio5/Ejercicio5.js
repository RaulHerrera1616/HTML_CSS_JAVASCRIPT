do {

    var opc = prompt(`Ingrese la opcion a realizar
    s o S. Sumar
    r o R. Restar
    m o M. Multiplicar
    d o D. Dividir
    f o F. Salir`).toLowerCase();
    var n1 = parseFloat(prompt("Ingrese el primer numero"));
    var n2 = parseFloat(prompt("Ingrese el segundo numero numero"));
    switch (opc) {
        case "s":
            alert("La suma es: " + (n1 + n2));
            break;
        case "r":
            alert("La resta es: " + (n1 - n2));
            break;
        case "m":
            alert("La multiplicacion es: " + (n1 * n2));
            break;
        case "d":
            alert("La dividion es: " + (n1 / n2));
            break;
        case "f":
            alert("Hasta pronto");
            break;
    }
} while (opc !== "f");