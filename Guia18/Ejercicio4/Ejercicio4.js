let respuesta;
do {
    respuesta = prompt("Ingrese un caracer").toUpperCase();
    if (respuesta=="S" || respuesta=="N") {
        alert("CORRECTO");
    }else{
        alert("INCORRECTO");
    }
} while (respuesta !== "S" && respuesta !== "N");