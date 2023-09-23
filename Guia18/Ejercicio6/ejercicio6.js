do {
    var num = parseInt(prompt("Digite un numero"))
    
    if (num%2==0 && num!==0) {
        alert("el numero ingresado es par")
    }else if(num===0){
        alert("El numero ingresado no es par ni impar")
    }else{
        alert("El numero ingresado es impar")
    }

} while (num === 0);

