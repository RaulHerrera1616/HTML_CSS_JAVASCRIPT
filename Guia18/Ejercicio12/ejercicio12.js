const tipoDeDato = (dato) =>{
    return typeof dato;
}
alert(tipoDeDato(34));
alert(tipoDeDato("canario"));
alert(tipoDeDato(true));
alert(tipoDeDato(null));
alert(tipoDeDato(undefined));
alert(tipoDeDato(function () {}));
alert(tipoDeDato([]));

