{"payload":{"allShortcutsEnabled":true,"fileTree":{"":{"items":[{"name":"README.md","path":"README.md","contentType":"file"},{"name":"ejemplosJavaScript.js","path":"ejemplosJavaScript.js","contentType":"file"},{"name":"ejemplosJavaScriptUtilizandoDOM.js","path":"ejemplosJavaScriptUtilizandoDOM.js","contentType":"file"},{"name":"index.html","path":"index.html","contentType":"file"},{"name":"style.css","path":"style.css","contentType":"file"}],"totalCount":5}},"fileTreeProcessingTime":2.657766,"foldersToFetch":[],"reducedMotionEnabled":"system","repo":{"id":438670841,"defaultBranch":"master","name":"Javascript","ownerLogin":"EggCooperation","currentUserCanPush":false,"isFork":false,"isEmpty":false,"createdAt":"2021-12-15T12:03:03.000-03:00","ownerAvatar":"https://avatars.githubusercontent.com/u/96086922?v=4","public":true,"private":false,"isOrgOwned":true},"refInfo":{"name":"master","listCacheKey":"v0:1654701761.6437829","canEdit":true,"refType":"branch","currentOid":"99809db9638552ed3e98f8c153ed46bca62d046d"},"path":"ejemplosJavaScriptUtilizandoDOM.js","currentUser":{"id":127139272,"login":"RaulHerrera1616","userEmail":"raul300378@gmail.com"},"blob":{"rawLines":["//DOM - DOCUMENT OBJECT MODEL --- MODELO DE OBJETOS DEL DOCUMENTO\r","let parrafo = document.getElementById(\"parrafo\")  //accedemos al elemento html por id\r","//pueden recibir --- la clase, la etiqueta, y los id\r","console.log(parrafo) \r","//Accemos a los elementos por classname\r","let section = document.getElementsByClassName(\"container\")\r","// console.log(section)\r","let contenedor = section[0] //accedemos al primer elemento, ya que getElementsByClassName nos trae un objeto similar a un array\r","\r","console.log(\"Mostramos el contenido del parrafo ------> \" + parrafo.innerHTML)\r","parrafo.innerHTML = \"Parrafo modificado con javascript\"\r","// parrafo.textContent = \"Parrafo modificado con javascript\" //tmb se puede hacer asi\r","console.log(parrafo)\r","console.log(\"Mostramos el contenido del parrafo modificado con js -------> \" + parrafo.innerHTML) //solo el contenido\r","console.log(\"Mostramos el contenido del parrafo modificado con js -------> \" + parrafo.outerHTML) //includia la etiqueta\r","\r","//AGREGAR ELEMENTOS HTML DINAMICAMENTE\r","//SELECCIONAMOS EL NODO (\"PADRE/CONTENEDOR\") DONDE LO QUEREMOS AGREGAR\r","let parrafoNuevo = document.createElement(\"p\")\r","parrafoNuevo.textContent = \"Soy un parrafo agregado por javascript\"\r","contenedor.appendChild(parrafoNuevo)\r","\r","//PODEMOS AGREGAR ESTILOS CSS CON JAVASCRIPT --- VARIAS ALTERNATIVAS\r","\r","//MODIFICAR LOS ESTILOS EN LINEA Y DE A UNO A LA VEZ\r","//todos los elementos tienen la propiedad style que representa a los estilos en linea\r","\r","// parrafo.style.color = \"red\"\r","// parrafo.style.fontSize = \"24px\"\r","\r","//ESTE ELEMENTO QUEDARIA ASI\r","//<p id=\"parrafo\" style=\"color: red; font-size: 24px\">Parrafo con id</p>\r","\r","//modifiquemos la section \r","contenedor.style.width = \"50%\"\r","contenedor.style.background = \"grey\"\r","contenedor.style.height = \"200px\"\r","contenedor.style.margin = \"auto\"\r","\r","//OTRA ALTERNATIVA -- PODEMOS AGREGARLE UNA CLASE AL ELEMENTO HTML QUE YA CONTENGA ESTILOS, ESTO ES UNA BUENA PRACTICA\r","//YA QUE NO USAMOS ESTILOS EN LINEA\r","\r","contenedor.className = \"ContainerPrincipal\" //si tenemos una clase con estilos con este nombre se van a aplicar a este elemento\r","console.log(contenedor) //vemos como queda el html con todo lo que le hemos agregado\r","\r","parrafo.className = \"parrafoPrincipal\"\r","\r","console.log(contenedor.outerHTML) //vemos como queda el html con todo lo que le hemos agregado\r","\r","\r","//EVENTOS\r","// Los eventos de JavaScript permiten la interacción entre las aplicaciones JavaScript y los usuarios.\r","// Por ejemplo --> cada vez que se pulsa un botón, se produce un evento.\r","\r","let botonSumar = document.getElementById(\"sumar\");\r","let botonRestar = document.getElementById(\"restar\");\r","let unidades = document.getElementById(\"cantidad\");\r","let precioTotal = document.getElementById(\"precio\");\r","\r","//addEventListener con esto otorgamos el evento al elemento html\r","botonSumar.addEventListener(\"click\", () => {\r","    unidades.textContent = (Number(unidades.textContent)+ 1)\r","    precioTotal.textContent = (Number(unidades.textContent))*400;\r","})\r","\r","botonRestar.addEventListener(\"click\" , () => {\r","    if (unidades.textContent > 1) {\r","        unidades.textContent = (Number(unidades.textContent) - 1)\r","        precioTotal.textContent = (Number(unidades.textContent))*400;\r","    }\r","})\r","\r","\r","\r","//EVENTOS EN FORMULARIO\r","\r","let inputNombre = document.getElementById(\"nombre\")\r","let inputApellido = document.getElementById(\"apellido\")\r","let inputMail = document.getElementById(\"mail\")\r","let inputContraseña = document.getElementById(\"contraseña\")\r","\r","let botonRegistro = document.getElementById(\"registro\")\r","\r","botonRegistro.addEventListener(\"click\" , (e) => {\r","//evitamos el comportamiento natural de un boton --> enviar informacion por lo tanto se recargaria la pag y perdemos la info\r","    e.preventDefault() \r","    console.log(`Nombre: `, inputNombre.value)\r","    console.log(`Apellido: `, inputApellido.value)\r","    console.log(`Mail: `, inputMail.value)\r","    console.log(`Contraseña:` , inputContraseña.value)\r","})\r","\r","inputNombre.addEventListener(\"change\", (e) => { //evento para obtener el valor del input\r","    console.log(e.target.value)    \r","})\r","\r","\r","//BUSCADOR DINAMICO\r","\r","const productos = [\r","    {nombre: \"Celular\" , valor: 50000},\r","    {nombre: \"Televisor\" , valor: 80000},\r","    {nombre: \"Cafetera\" , valor: 20000},\r","    {nombre: \"Aire acondicionado\" , valor: 100000},\r","    {nombre: \"Aspiradora\" , valor: 30000}\r","]\r","const inputBusqueda = document.getElementById(\"inputBusqueda\")\r","const listado = document.getElementById(\"listadoProductos\")\r","const resultados = document.getElementById(\"resultados\")\r","const botonBusqueda = document.getElementById(\"botonBusqueda\")\r","\r","const filtrar = () => {\r","    resultados.innerHTML = \"\"\r","\r","    const texto = inputBusqueda.value.toLowerCase()\r","\r","    for(let producto of productos){\r","        let nombre = producto.nombre.toLowerCase()\r","\r","        if (nombre.includes(texto)) {\r","            resultados.innerHTML += \r","            `<li>${producto.nombre} - $${producto.valor}</li>`\r","        }\r","    }\r","\r","        if (resultados.innerHTML === \"\") {\r","            resultados.innerHTML = \r","            `<li>Producto no encontrado</li>`\r","        }\r","}\r","\r","botonBusqueda.addEventListener(\"click\" , filtrar) //cada vez que apretamos en el boton\r","inputBusqueda.addEventListener(\"keyup\" , filtrar) //cada vez que apretamos una tecla se activa el evento -- importante hacerlo sobre el input\r","\r","filtrar()// para que me muestre los productos apenas me cargue la pagina\r","\r"],"stylingDirectives":[[{"start":0,"end":66,"cssClass":"pl-c"}],[{"start":0,"end":3,"cssClass":"pl-k"},{"start":4,"end":11,"cssClass":"pl-s1"},{"start":12,"end":13,"cssClass":"pl-c1"},{"start":14,"end":22,"cssClass":"pl-smi"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":23,"end":37,"cssClass":"pl-en"},{"start":37,"end":38,"cssClass":"pl-kos"},{"start":38,"end":47,"cssClass":"pl-s"},{"start":47,"end":48,"cssClass":"pl-kos"},{"start":50,"end":86,"cssClass":"pl-c"}],[{"start":0,"end":53,"cssClass":"pl-c"}],[{"start":0,"end":7,"cssClass":"pl-smi"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":8,"end":11,"cssClass":"pl-en"},{"start":11,"end":12,"cssClass":"pl-kos"},{"start":12,"end":19,"cssClass":"pl-s1"},{"start":19,"end":20,"cssClass":"pl-kos"}],[{"start":0,"end":40,"cssClass":"pl-c"}],[{"start":0,"end":3,"cssClass":"pl-k"},{"start":4,"end":11,"cssClass":"pl-s1"},{"start":12,"end":13,"cssClass":"pl-c1"},{"start":14,"end":22,"cssClass":"pl-smi"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":23,"end":45,"cssClass":"pl-en"},{"start":45,"end":46,"cssClass":"pl-kos"},{"start":46,"end":57,"cssClass":"pl-s"},{"start":57,"end":58,"cssClass":"pl-kos"}],[{"start":0,"end":24,"cssClass":"pl-c"}],[{"start":0,"end":3,"cssClass":"pl-k"},{"start":4,"end":14,"cssClass":"pl-s1"},{"start":15,"end":16,"cssClass":"pl-c1"},{"start":17,"end":24,"cssClass":"pl-s1"},{"start":24,"end":25,"cssClass":"pl-kos"},{"start":25,"end":26,"cssClass":"pl-c1"},{"start":26,"end":27,"cssClass":"pl-kos"},{"start":28,"end":128,"cssClass":"pl-c"}],[],[{"start":0,"end":7,"cssClass":"pl-smi"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":8,"end":11,"cssClass":"pl-en"},{"start":11,"end":12,"cssClass":"pl-kos"},{"start":12,"end":57,"cssClass":"pl-s"},{"start":58,"end":59,"cssClass":"pl-c1"},{"start":60,"end":67,"cssClass":"pl-s1"},{"start":67,"end":68,"cssClass":"pl-kos"},{"start":68,"end":77,"cssClass":"pl-c1"},{"start":77,"end":78,"cssClass":"pl-kos"}],[{"start":0,"end":7,"cssClass":"pl-s1"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":8,"end":17,"cssClass":"pl-c1"},{"start":18,"end":19,"cssClass":"pl-c1"},{"start":20,"end":55,"cssClass":"pl-s"}],[{"start":0,"end":86,"cssClass":"pl-c"}],[{"start":0,"end":7,"cssClass":"pl-smi"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":8,"end":11,"cssClass":"pl-en"},{"start":11,"end":12,"cssClass":"pl-kos"},{"start":12,"end":19,"cssClass":"pl-s1"},{"start":19,"end":20,"cssClass":"pl-kos"}],[{"start":0,"end":7,"cssClass":"pl-smi"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":8,"end":11,"cssClass":"pl-en"},{"start":11,"end":12,"cssClass":"pl-kos"},{"start":12,"end":76,"cssClass":"pl-s"},{"start":77,"end":78,"cssClass":"pl-c1"},{"start":79,"end":86,"cssClass":"pl-s1"},{"start":86,"end":87,"cssClass":"pl-kos"},{"start":87,"end":96,"cssClass":"pl-c1"},{"start":96,"end":97,"cssClass":"pl-kos"},{"start":98,"end":118,"cssClass":"pl-c"}],[{"start":0,"end":7,"cssClass":"pl-smi"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":8,"end":11,"cssClass":"pl-en"},{"start":11,"end":12,"cssClass":"pl-kos"},{"start":12,"end":76,"cssClass":"pl-s"},{"start":77,"end":78,"cssClass":"pl-c1"},{"start":79,"end":86,"cssClass":"pl-s1"},{"start":86,"end":87,"cssClass":"pl-kos"},{"start":87,"end":96,"cssClass":"pl-c1"},{"start":96,"end":97,"cssClass":"pl-kos"},{"start":98,"end":121,"cssClass":"pl-c"}],[],[{"start":0,"end":39,"cssClass":"pl-c"}],[{"start":0,"end":71,"cssClass":"pl-c"}],[{"start":0,"end":3,"cssClass":"pl-k"},{"start":4,"end":16,"cssClass":"pl-s1"},{"start":17,"end":18,"cssClass":"pl-c1"},{"start":19,"end":27,"cssClass":"pl-smi"},{"start":27,"end":28,"cssClass":"pl-kos"},{"start":28,"end":41,"cssClass":"pl-en"},{"start":41,"end":42,"cssClass":"pl-kos"},{"start":42,"end":45,"cssClass":"pl-s"},{"start":45,"end":46,"cssClass":"pl-kos"}],[{"start":0,"end":12,"cssClass":"pl-s1"},{"start":12,"end":13,"cssClass":"pl-kos"},{"start":13,"end":24,"cssClass":"pl-c1"},{"start":25,"end":26,"cssClass":"pl-c1"},{"start":27,"end":67,"cssClass":"pl-s"}],[{"start":0,"end":10,"cssClass":"pl-s1"},{"start":10,"end":11,"cssClass":"pl-kos"},{"start":11,"end":22,"cssClass":"pl-en"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":23,"end":35,"cssClass":"pl-s1"},{"start":35,"end":36,"cssClass":"pl-kos"}],[],[{"start":0,"end":69,"cssClass":"pl-c"}],[],[{"start":0,"end":53,"cssClass":"pl-c"}],[{"start":0,"end":86,"cssClass":"pl-c"}],[],[{"start":0,"end":31,"cssClass":"pl-c"}],[{"start":0,"end":35,"cssClass":"pl-c"}],[],[{"start":0,"end":29,"cssClass":"pl-c"}],[{"start":0,"end":73,"cssClass":"pl-c"}],[],[{"start":0,"end":27,"cssClass":"pl-c"}],[{"start":0,"end":10,"cssClass":"pl-s1"},{"start":10,"end":11,"cssClass":"pl-kos"},{"start":11,"end":16,"cssClass":"pl-c1"},{"start":16,"end":17,"cssClass":"pl-kos"},{"start":17,"end":22,"cssClass":"pl-c1"},{"start":23,"end":24,"cssClass":"pl-c1"},{"start":25,"end":30,"cssClass":"pl-s"}],[{"start":0,"end":10,"cssClass":"pl-s1"},{"start":10,"end":11,"cssClass":"pl-kos"},{"start":11,"end":16,"cssClass":"pl-c1"},{"start":16,"end":17,"cssClass":"pl-kos"},{"start":17,"end":27,"cssClass":"pl-c1"},{"start":28,"end":29,"cssClass":"pl-c1"},{"start":30,"end":36,"cssClass":"pl-s"}],[{"start":0,"end":10,"cssClass":"pl-s1"},{"start":10,"end":11,"cssClass":"pl-kos"},{"start":11,"end":16,"cssClass":"pl-c1"},{"start":16,"end":17,"cssClass":"pl-kos"},{"start":17,"end":23,"cssClass":"pl-c1"},{"start":24,"end":25,"cssClass":"pl-c1"},{"start":26,"end":33,"cssClass":"pl-s"}],[{"start":0,"end":10,"cssClass":"pl-s1"},{"start":10,"end":11,"cssClass":"pl-kos"},{"start":11,"end":16,"cssClass":"pl-c1"},{"start":16,"end":17,"cssClass":"pl-kos"},{"start":17,"end":23,"cssClass":"pl-c1"},{"start":24,"end":25,"cssClass":"pl-c1"},{"start":26,"end":32,"cssClass":"pl-s"}],[],[{"start":0,"end":119,"cssClass":"pl-c"}],[{"start":0,"end":36,"cssClass":"pl-c"}],[],[{"start":0,"end":10,"cssClass":"pl-s1"},{"start":10,"end":11,"cssClass":"pl-kos"},{"start":11,"end":20,"cssClass":"pl-c1"},{"start":21,"end":22,"cssClass":"pl-c1"},{"start":23,"end":43,"cssClass":"pl-s"},{"start":44,"end":128,"cssClass":"pl-c"}],[{"start":0,"end":7,"cssClass":"pl-smi"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":8,"end":11,"cssClass":"pl-en"},{"start":11,"end":12,"cssClass":"pl-kos"},{"start":12,"end":22,"cssClass":"pl-s1"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":24,"end":85,"cssClass":"pl-c"}],[],[{"start":0,"end":7,"cssClass":"pl-s1"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":8,"end":17,"cssClass":"pl-c1"},{"start":18,"end":19,"cssClass":"pl-c1"},{"start":20,"end":38,"cssClass":"pl-s"}],[],[{"start":0,"end":7,"cssClass":"pl-smi"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":8,"end":11,"cssClass":"pl-en"},{"start":11,"end":12,"cssClass":"pl-kos"},{"start":12,"end":22,"cssClass":"pl-s1"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":23,"end":32,"cssClass":"pl-c1"},{"start":32,"end":33,"cssClass":"pl-kos"},{"start":34,"end":95,"cssClass":"pl-c"}],[],[],[{"start":0,"end":10,"cssClass":"pl-c"}],[{"start":0,"end":103,"cssClass":"pl-c"}],[{"start":0,"end":73,"cssClass":"pl-c"}],[],[{"start":0,"end":3,"cssClass":"pl-k"},{"start":4,"end":14,"cssClass":"pl-s1"},{"start":15,"end":16,"cssClass":"pl-c1"},{"start":17,"end":25,"cssClass":"pl-smi"},{"start":25,"end":26,"cssClass":"pl-kos"},{"start":26,"end":40,"cssClass":"pl-en"},{"start":40,"end":41,"cssClass":"pl-kos"},{"start":41,"end":48,"cssClass":"pl-s"},{"start":48,"end":49,"cssClass":"pl-kos"},{"start":49,"end":50,"cssClass":"pl-kos"}],[{"start":0,"end":3,"cssClass":"pl-k"},{"start":4,"end":15,"cssClass":"pl-s1"},{"start":16,"end":17,"cssClass":"pl-c1"},{"start":18,"end":26,"cssClass":"pl-smi"},{"start":26,"end":27,"cssClass":"pl-kos"},{"start":27,"end":41,"cssClass":"pl-en"},{"start":41,"end":42,"cssClass":"pl-kos"},{"start":42,"end":50,"cssClass":"pl-s"},{"start":50,"end":51,"cssClass":"pl-kos"},{"start":51,"end":52,"cssClass":"pl-kos"}],[{"start":0,"end":3,"cssClass":"pl-k"},{"start":4,"end":12,"cssClass":"pl-s1"},{"start":13,"end":14,"cssClass":"pl-c1"},{"start":15,"end":23,"cssClass":"pl-smi"},{"start":23,"end":24,"cssClass":"pl-kos"},{"start":24,"end":38,"cssClass":"pl-en"},{"start":38,"end":39,"cssClass":"pl-kos"},{"start":39,"end":49,"cssClass":"pl-s"},{"start":49,"end":50,"cssClass":"pl-kos"},{"start":50,"end":51,"cssClass":"pl-kos"}],[{"start":0,"end":3,"cssClass":"pl-k"},{"start":4,"end":15,"cssClass":"pl-s1"},{"start":16,"end":17,"cssClass":"pl-c1"},{"start":18,"end":26,"cssClass":"pl-smi"},{"start":26,"end":27,"cssClass":"pl-kos"},{"start":27,"end":41,"cssClass":"pl-en"},{"start":41,"end":42,"cssClass":"pl-kos"},{"start":42,"end":50,"cssClass":"pl-s"},{"start":50,"end":51,"cssClass":"pl-kos"},{"start":51,"end":52,"cssClass":"pl-kos"}],[],[{"start":0,"end":65,"cssClass":"pl-c"}],[{"start":0,"end":10,"cssClass":"pl-s1"},{"start":10,"end":11,"cssClass":"pl-kos"},{"start":11,"end":27,"cssClass":"pl-en"},{"start":27,"end":28,"cssClass":"pl-kos"},{"start":28,"end":35,"cssClass":"pl-s"},{"start":35,"end":36,"cssClass":"pl-kos"},{"start":37,"end":38,"cssClass":"pl-kos"},{"start":38,"end":39,"cssClass":"pl-kos"},{"start":40,"end":42,"cssClass":"pl-c1"},{"start":43,"end":44,"cssClass":"pl-kos"}],[{"start":4,"end":12,"cssClass":"pl-s1"},{"start":12,"end":13,"cssClass":"pl-kos"},{"start":13,"end":24,"cssClass":"pl-c1"},{"start":25,"end":26,"cssClass":"pl-c1"},{"start":27,"end":28,"cssClass":"pl-kos"},{"start":28,"end":34,"cssClass":"pl-v"},{"start":34,"end":35,"cssClass":"pl-kos"},{"start":35,"end":43,"cssClass":"pl-s1"},{"start":43,"end":44,"cssClass":"pl-kos"},{"start":44,"end":55,"cssClass":"pl-c1"},{"start":55,"end":56,"cssClass":"pl-kos"},{"start":56,"end":57,"cssClass":"pl-c1"},{"start":58,"end":59,"cssClass":"pl-c1"},{"start":59,"end":60,"cssClass":"pl-kos"}],[{"start":4,"end":15,"cssClass":"pl-s1"},{"start":15,"end":16,"cssClass":"pl-kos"},{"start":16,"end":27,"cssClass":"pl-c1"},{"start":28,"end":29,"cssClass":"pl-c1"},{"start":30,"end":31,"cssClass":"pl-kos"},{"start":31,"end":37,"cssClass":"pl-v"},{"start":37,"end":38,"cssClass":"pl-kos"},{"start":38,"end":46,"cssClass":"pl-s1"},{"start":46,"end":47,"cssClass":"pl-kos"},{"start":47,"end":58,"cssClass":"pl-c1"},{"start":58,"end":59,"cssClass":"pl-kos"},{"start":59,"end":60,"cssClass":"pl-kos"},{"start":60,"end":61,"cssClass":"pl-c1"},{"start":61,"end":64,"cssClass":"pl-c1"},{"start":64,"end":65,"cssClass":"pl-kos"}],[{"start":0,"end":1,"cssClass":"pl-kos"},{"start":1,"end":2,"cssClass":"pl-kos"}],[],[{"start":0,"end":11,"cssClass":"pl-s1"},{"start":11,"end":12,"cssClass":"pl-kos"},{"start":12,"end":28,"cssClass":"pl-en"},{"start":28,"end":29,"cssClass":"pl-kos"},{"start":29,"end":36,"cssClass":"pl-s"},{"start":37,"end":38,"cssClass":"pl-kos"},{"start":39,"end":40,"cssClass":"pl-kos"},{"start":40,"end":41,"cssClass":"pl-kos"},{"start":42,"end":44,"cssClass":"pl-c1"},{"start":45,"end":46,"cssClass":"pl-kos"}],[{"start":4,"end":6,"cssClass":"pl-k"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":8,"end":16,"cssClass":"pl-s1"},{"start":16,"end":17,"cssClass":"pl-kos"},{"start":17,"end":28,"cssClass":"pl-c1"},{"start":29,"end":30,"cssClass":"pl-c1"},{"start":31,"end":32,"cssClass":"pl-c1"},{"start":32,"end":33,"cssClass":"pl-kos"},{"start":34,"end":35,"cssClass":"pl-kos"}],[{"start":8,"end":16,"cssClass":"pl-s1"},{"start":16,"end":17,"cssClass":"pl-kos"},{"start":17,"end":28,"cssClass":"pl-c1"},{"start":29,"end":30,"cssClass":"pl-c1"},{"start":31,"end":32,"cssClass":"pl-kos"},{"start":32,"end":38,"cssClass":"pl-v"},{"start":38,"end":39,"cssClass":"pl-kos"},{"start":39,"end":47,"cssClass":"pl-s1"},{"start":47,"end":48,"cssClass":"pl-kos"},{"start":48,"end":59,"cssClass":"pl-c1"},{"start":59,"end":60,"cssClass":"pl-kos"},{"start":61,"end":62,"cssClass":"pl-c1"},{"start":63,"end":64,"cssClass":"pl-c1"},{"start":64,"end":65,"cssClass":"pl-kos"}],[{"start":8,"end":19,"cssClass":"pl-s1"},{"start":19,"end":20,"cssClass":"pl-kos"},{"start":20,"end":31,"cssClass":"pl-c1"},{"start":32,"end":33,"cssClass":"pl-c1"},{"start":34,"end":35,"cssClass":"pl-kos"},{"start":35,"end":41,"cssClass":"pl-v"},{"start":41,"end":42,"cssClass":"pl-kos"},{"start":42,"end":50,"cssClass":"pl-s1"},{"start":50,"end":51,"cssClass":"pl-kos"},{"start":51,"end":62,"cssClass":"pl-c1"},{"start":62,"end":63,"cssClass":"pl-kos"},{"start":63,"end":64,"cssClass":"pl-kos"},{"start":64,"end":65,"cssClass":"pl-c1"},{"start":65,"end":68,"cssClass":"pl-c1"},{"start":68,"end":69,"cssClass":"pl-kos"}],[{"start":4,"end":5,"cssClass":"pl-kos"}],[{"start":0,"end":1,"cssClass":"pl-kos"},{"start":1,"end":2,"cssClass":"pl-kos"}],[],[],[],[{"start":0,"end":24,"cssClass":"pl-c"}],[],[{"start":0,"end":3,"cssClass":"pl-k"},{"start":4,"end":15,"cssClass":"pl-s1"},{"start":16,"end":17,"cssClass":"pl-c1"},{"start":18,"end":26,"cssClass":"pl-smi"},{"start":26,"end":27,"cssClass":"pl-kos"},{"start":27,"end":41,"cssClass":"pl-en"},{"start":41,"end":42,"cssClass":"pl-kos"},{"start":42,"end":50,"cssClass":"pl-s"},{"start":50,"end":51,"cssClass":"pl-kos"}],[{"start":0,"end":3,"cssClass":"pl-k"},{"start":4,"end":17,"cssClass":"pl-s1"},{"start":18,"end":19,"cssClass":"pl-c1"},{"start":20,"end":28,"cssClass":"pl-smi"},{"start":28,"end":29,"cssClass":"pl-kos"},{"start":29,"end":43,"cssClass":"pl-en"},{"start":43,"end":44,"cssClass":"pl-kos"},{"start":44,"end":54,"cssClass":"pl-s"},{"start":54,"end":55,"cssClass":"pl-kos"}],[{"start":0,"end":3,"cssClass":"pl-k"},{"start":4,"end":13,"cssClass":"pl-s1"},{"start":14,"end":15,"cssClass":"pl-c1"},{"start":16,"end":24,"cssClass":"pl-smi"},{"start":24,"end":25,"cssClass":"pl-kos"},{"start":25,"end":39,"cssClass":"pl-en"},{"start":39,"end":40,"cssClass":"pl-kos"},{"start":40,"end":46,"cssClass":"pl-s"},{"start":46,"end":47,"cssClass":"pl-kos"}],[{"start":0,"end":3,"cssClass":"pl-k"},{"start":4,"end":19,"cssClass":"pl-s1"},{"start":20,"end":21,"cssClass":"pl-c1"},{"start":22,"end":30,"cssClass":"pl-smi"},{"start":30,"end":31,"cssClass":"pl-kos"},{"start":31,"end":45,"cssClass":"pl-en"},{"start":45,"end":46,"cssClass":"pl-kos"},{"start":46,"end":58,"cssClass":"pl-s"},{"start":58,"end":59,"cssClass":"pl-kos"}],[],[{"start":0,"end":3,"cssClass":"pl-k"},{"start":4,"end":17,"cssClass":"pl-s1"},{"start":18,"end":19,"cssClass":"pl-c1"},{"start":20,"end":28,"cssClass":"pl-smi"},{"start":28,"end":29,"cssClass":"pl-kos"},{"start":29,"end":43,"cssClass":"pl-en"},{"start":43,"end":44,"cssClass":"pl-kos"},{"start":44,"end":54,"cssClass":"pl-s"},{"start":54,"end":55,"cssClass":"pl-kos"}],[],[{"start":0,"end":13,"cssClass":"pl-s1"},{"start":13,"end":14,"cssClass":"pl-kos"},{"start":14,"end":30,"cssClass":"pl-en"},{"start":30,"end":31,"cssClass":"pl-kos"},{"start":31,"end":38,"cssClass":"pl-s"},{"start":39,"end":40,"cssClass":"pl-kos"},{"start":41,"end":42,"cssClass":"pl-kos"},{"start":42,"end":43,"cssClass":"pl-s1"},{"start":43,"end":44,"cssClass":"pl-kos"},{"start":45,"end":47,"cssClass":"pl-c1"},{"start":48,"end":49,"cssClass":"pl-kos"}],[{"start":0,"end":125,"cssClass":"pl-c"}],[{"start":4,"end":5,"cssClass":"pl-s1"},{"start":5,"end":6,"cssClass":"pl-kos"},{"start":6,"end":20,"cssClass":"pl-en"},{"start":20,"end":21,"cssClass":"pl-kos"},{"start":21,"end":22,"cssClass":"pl-kos"}],[{"start":4,"end":11,"cssClass":"pl-smi"},{"start":11,"end":12,"cssClass":"pl-kos"},{"start":12,"end":15,"cssClass":"pl-en"},{"start":15,"end":16,"cssClass":"pl-kos"},{"start":16,"end":26,"cssClass":"pl-s"},{"start":26,"end":27,"cssClass":"pl-kos"},{"start":28,"end":39,"cssClass":"pl-s1"},{"start":39,"end":40,"cssClass":"pl-kos"},{"start":40,"end":45,"cssClass":"pl-c1"},{"start":45,"end":46,"cssClass":"pl-kos"}],[{"start":4,"end":11,"cssClass":"pl-smi"},{"start":11,"end":12,"cssClass":"pl-kos"},{"start":12,"end":15,"cssClass":"pl-en"},{"start":15,"end":16,"cssClass":"pl-kos"},{"start":16,"end":28,"cssClass":"pl-s"},{"start":28,"end":29,"cssClass":"pl-kos"},{"start":30,"end":43,"cssClass":"pl-s1"},{"start":43,"end":44,"cssClass":"pl-kos"},{"start":44,"end":49,"cssClass":"pl-c1"},{"start":49,"end":50,"cssClass":"pl-kos"}],[{"start":4,"end":11,"cssClass":"pl-smi"},{"start":11,"end":12,"cssClass":"pl-kos"},{"start":12,"end":15,"cssClass":"pl-en"},{"start":15,"end":16,"cssClass":"pl-kos"},{"start":16,"end":24,"cssClass":"pl-s"},{"start":24,"end":25,"cssClass":"pl-kos"},{"start":26,"end":35,"cssClass":"pl-s1"},{"start":35,"end":36,"cssClass":"pl-kos"},{"start":36,"end":41,"cssClass":"pl-c1"},{"start":41,"end":42,"cssClass":"pl-kos"}],[{"start":4,"end":11,"cssClass":"pl-smi"},{"start":11,"end":12,"cssClass":"pl-kos"},{"start":12,"end":15,"cssClass":"pl-en"},{"start":15,"end":16,"cssClass":"pl-kos"},{"start":16,"end":29,"cssClass":"pl-s"},{"start":30,"end":31,"cssClass":"pl-kos"},{"start":32,"end":47,"cssClass":"pl-s1"},{"start":47,"end":48,"cssClass":"pl-kos"},{"start":48,"end":53,"cssClass":"pl-c1"},{"start":53,"end":54,"cssClass":"pl-kos"}],[{"start":0,"end":1,"cssClass":"pl-kos"},{"start":1,"end":2,"cssClass":"pl-kos"}],[],[{"start":0,"end":11,"cssClass":"pl-s1"},{"start":11,"end":12,"cssClass":"pl-kos"},{"start":12,"end":28,"cssClass":"pl-en"},{"start":28,"end":29,"cssClass":"pl-kos"},{"start":29,"end":37,"cssClass":"pl-s"},{"start":37,"end":38,"cssClass":"pl-kos"},{"start":39,"end":40,"cssClass":"pl-kos"},{"start":40,"end":41,"cssClass":"pl-s1"},{"start":41,"end":42,"cssClass":"pl-kos"},{"start":43,"end":45,"cssClass":"pl-c1"},{"start":46,"end":47,"cssClass":"pl-kos"},{"start":48,"end":89,"cssClass":"pl-c"}],[{"start":4,"end":11,"cssClass":"pl-smi"},{"start":11,"end":12,"cssClass":"pl-kos"},{"start":12,"end":15,"cssClass":"pl-en"},{"start":15,"end":16,"cssClass":"pl-kos"},{"start":16,"end":17,"cssClass":"pl-s1"},{"start":17,"end":18,"cssClass":"pl-kos"},{"start":18,"end":24,"cssClass":"pl-c1"},{"start":24,"end":25,"cssClass":"pl-kos"},{"start":25,"end":30,"cssClass":"pl-c1"},{"start":30,"end":31,"cssClass":"pl-kos"}],[{"start":0,"end":1,"cssClass":"pl-kos"},{"start":1,"end":2,"cssClass":"pl-kos"}],[],[],[{"start":0,"end":20,"cssClass":"pl-c"}],[],[{"start":0,"end":5,"cssClass":"pl-k"},{"start":6,"end":15,"cssClass":"pl-s1"},{"start":16,"end":17,"cssClass":"pl-c1"},{"start":18,"end":19,"cssClass":"pl-kos"}],[{"start":4,"end":5,"cssClass":"pl-kos"},{"start":5,"end":11,"cssClass":"pl-c1"},{"start":13,"end":22,"cssClass":"pl-s"},{"start":23,"end":24,"cssClass":"pl-kos"},{"start":25,"end":30,"cssClass":"pl-c1"},{"start":32,"end":37,"cssClass":"pl-c1"},{"start":37,"end":38,"cssClass":"pl-kos"},{"start":38,"end":39,"cssClass":"pl-kos"}],[{"start":4,"end":5,"cssClass":"pl-kos"},{"start":5,"end":11,"cssClass":"pl-c1"},{"start":13,"end":24,"cssClass":"pl-s"},{"start":25,"end":26,"cssClass":"pl-kos"},{"start":27,"end":32,"cssClass":"pl-c1"},{"start":34,"end":39,"cssClass":"pl-c1"},{"start":39,"end":40,"cssClass":"pl-kos"},{"start":40,"end":41,"cssClass":"pl-kos"}],[{"start":4,"end":5,"cssClass":"pl-kos"},{"start":5,"end":11,"cssClass":"pl-c1"},{"start":13,"end":23,"cssClass":"pl-s"},{"start":24,"end":25,"cssClass":"pl-kos"},{"start":26,"end":31,"cssClass":"pl-c1"},{"start":33,"end":38,"cssClass":"pl-c1"},{"start":38,"end":39,"cssClass":"pl-kos"},{"start":39,"end":40,"cssClass":"pl-kos"}],[{"start":4,"end":5,"cssClass":"pl-kos"},{"start":5,"end":11,"cssClass":"pl-c1"},{"start":13,"end":33,"cssClass":"pl-s"},{"start":34,"end":35,"cssClass":"pl-kos"},{"start":36,"end":41,"cssClass":"pl-c1"},{"start":43,"end":49,"cssClass":"pl-c1"},{"start":49,"end":50,"cssClass":"pl-kos"},{"start":50,"end":51,"cssClass":"pl-kos"}],[{"start":4,"end":5,"cssClass":"pl-kos"},{"start":5,"end":11,"cssClass":"pl-c1"},{"start":13,"end":25,"cssClass":"pl-s"},{"start":26,"end":27,"cssClass":"pl-kos"},{"start":28,"end":33,"cssClass":"pl-c1"},{"start":35,"end":40,"cssClass":"pl-c1"},{"start":40,"end":41,"cssClass":"pl-kos"}],[{"start":0,"end":1,"cssClass":"pl-kos"}],[{"start":0,"end":5,"cssClass":"pl-k"},{"start":6,"end":19,"cssClass":"pl-s1"},{"start":20,"end":21,"cssClass":"pl-c1"},{"start":22,"end":30,"cssClass":"pl-smi"},{"start":30,"end":31,"cssClass":"pl-kos"},{"start":31,"end":45,"cssClass":"pl-en"},{"start":45,"end":46,"cssClass":"pl-kos"},{"start":46,"end":61,"cssClass":"pl-s"},{"start":61,"end":62,"cssClass":"pl-kos"}],[{"start":0,"end":5,"cssClass":"pl-k"},{"start":6,"end":13,"cssClass":"pl-s1"},{"start":14,"end":15,"cssClass":"pl-c1"},{"start":16,"end":24,"cssClass":"pl-smi"},{"start":24,"end":25,"cssClass":"pl-kos"},{"start":25,"end":39,"cssClass":"pl-en"},{"start":39,"end":40,"cssClass":"pl-kos"},{"start":40,"end":58,"cssClass":"pl-s"},{"start":58,"end":59,"cssClass":"pl-kos"}],[{"start":0,"end":5,"cssClass":"pl-k"},{"start":6,"end":16,"cssClass":"pl-s1"},{"start":17,"end":18,"cssClass":"pl-c1"},{"start":19,"end":27,"cssClass":"pl-smi"},{"start":27,"end":28,"cssClass":"pl-kos"},{"start":28,"end":42,"cssClass":"pl-en"},{"start":42,"end":43,"cssClass":"pl-kos"},{"start":43,"end":55,"cssClass":"pl-s"},{"start":55,"end":56,"cssClass":"pl-kos"}],[{"start":0,"end":5,"cssClass":"pl-k"},{"start":6,"end":19,"cssClass":"pl-s1"},{"start":20,"end":21,"cssClass":"pl-c1"},{"start":22,"end":30,"cssClass":"pl-smi"},{"start":30,"end":31,"cssClass":"pl-kos"},{"start":31,"end":45,"cssClass":"pl-en"},{"start":45,"end":46,"cssClass":"pl-kos"},{"start":46,"end":61,"cssClass":"pl-s"},{"start":61,"end":62,"cssClass":"pl-kos"}],[],[{"start":0,"end":5,"cssClass":"pl-k"},{"start":6,"end":13,"cssClass":"pl-en"},{"start":14,"end":15,"cssClass":"pl-c1"},{"start":16,"end":17,"cssClass":"pl-kos"},{"start":17,"end":18,"cssClass":"pl-kos"},{"start":19,"end":21,"cssClass":"pl-c1"},{"start":22,"end":23,"cssClass":"pl-kos"}],[{"start":4,"end":14,"cssClass":"pl-s1"},{"start":14,"end":15,"cssClass":"pl-kos"},{"start":15,"end":24,"cssClass":"pl-c1"},{"start":25,"end":26,"cssClass":"pl-c1"},{"start":27,"end":29,"cssClass":"pl-s"}],[],[{"start":4,"end":9,"cssClass":"pl-k"},{"start":10,"end":15,"cssClass":"pl-s1"},{"start":16,"end":17,"cssClass":"pl-c1"},{"start":18,"end":31,"cssClass":"pl-s1"},{"start":31,"end":32,"cssClass":"pl-kos"},{"start":32,"end":37,"cssClass":"pl-c1"},{"start":37,"end":38,"cssClass":"pl-kos"},{"start":38,"end":49,"cssClass":"pl-en"},{"start":49,"end":50,"cssClass":"pl-kos"},{"start":50,"end":51,"cssClass":"pl-kos"}],[],[{"start":4,"end":7,"cssClass":"pl-k"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":8,"end":11,"cssClass":"pl-k"},{"start":12,"end":20,"cssClass":"pl-s1"},{"start":21,"end":23,"cssClass":"pl-k"},{"start":24,"end":33,"cssClass":"pl-s1"},{"start":33,"end":34,"cssClass":"pl-kos"},{"start":34,"end":35,"cssClass":"pl-kos"}],[{"start":8,"end":11,"cssClass":"pl-k"},{"start":12,"end":18,"cssClass":"pl-s1"},{"start":19,"end":20,"cssClass":"pl-c1"},{"start":21,"end":29,"cssClass":"pl-s1"},{"start":29,"end":30,"cssClass":"pl-kos"},{"start":30,"end":36,"cssClass":"pl-c1"},{"start":36,"end":37,"cssClass":"pl-kos"},{"start":37,"end":48,"cssClass":"pl-en"},{"start":48,"end":49,"cssClass":"pl-kos"},{"start":49,"end":50,"cssClass":"pl-kos"}],[],[{"start":8,"end":10,"cssClass":"pl-k"},{"start":11,"end":12,"cssClass":"pl-kos"},{"start":12,"end":18,"cssClass":"pl-s1"},{"start":18,"end":19,"cssClass":"pl-kos"},{"start":19,"end":27,"cssClass":"pl-en"},{"start":27,"end":28,"cssClass":"pl-kos"},{"start":28,"end":33,"cssClass":"pl-s1"},{"start":33,"end":34,"cssClass":"pl-kos"},{"start":34,"end":35,"cssClass":"pl-kos"},{"start":36,"end":37,"cssClass":"pl-kos"}],[{"start":12,"end":22,"cssClass":"pl-s1"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":23,"end":32,"cssClass":"pl-c1"},{"start":33,"end":35,"cssClass":"pl-c1"}],[{"start":12,"end":62,"cssClass":"pl-s"},{"start":17,"end":35,"cssClass":"pl-s1"},{"start":17,"end":19,"cssClass":"pl-kos"},{"start":19,"end":27,"cssClass":"pl-s1"},{"start":27,"end":28,"cssClass":"pl-kos"},{"start":28,"end":34,"cssClass":"pl-c1"},{"start":34,"end":35,"cssClass":"pl-kos"},{"start":39,"end":56,"cssClass":"pl-s1"},{"start":39,"end":41,"cssClass":"pl-kos"},{"start":41,"end":49,"cssClass":"pl-s1"},{"start":49,"end":50,"cssClass":"pl-kos"},{"start":50,"end":55,"cssClass":"pl-c1"},{"start":55,"end":56,"cssClass":"pl-kos"}],[{"start":8,"end":9,"cssClass":"pl-kos"}],[{"start":4,"end":5,"cssClass":"pl-kos"}],[],[{"start":8,"end":10,"cssClass":"pl-k"},{"start":11,"end":12,"cssClass":"pl-kos"},{"start":12,"end":22,"cssClass":"pl-s1"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":23,"end":32,"cssClass":"pl-c1"},{"start":33,"end":36,"cssClass":"pl-c1"},{"start":37,"end":39,"cssClass":"pl-s"},{"start":39,"end":40,"cssClass":"pl-kos"},{"start":41,"end":42,"cssClass":"pl-kos"}],[{"start":12,"end":22,"cssClass":"pl-s1"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":23,"end":32,"cssClass":"pl-c1"},{"start":33,"end":34,"cssClass":"pl-c1"}],[{"start":12,"end":45,"cssClass":"pl-s"}],[{"start":8,"end":9,"cssClass":"pl-kos"}],[{"start":0,"end":1,"cssClass":"pl-kos"}],[],[{"start":0,"end":13,"cssClass":"pl-s1"},{"start":13,"end":14,"cssClass":"pl-kos"},{"start":14,"end":30,"cssClass":"pl-en"},{"start":30,"end":31,"cssClass":"pl-kos"},{"start":31,"end":38,"cssClass":"pl-s"},{"start":39,"end":40,"cssClass":"pl-kos"},{"start":41,"end":48,"cssClass":"pl-en"},{"start":48,"end":49,"cssClass":"pl-kos"},{"start":50,"end":87,"cssClass":"pl-c"}],[{"start":0,"end":13,"cssClass":"pl-s1"},{"start":13,"end":14,"cssClass":"pl-kos"},{"start":14,"end":30,"cssClass":"pl-en"},{"start":30,"end":31,"cssClass":"pl-kos"},{"start":31,"end":38,"cssClass":"pl-s"},{"start":39,"end":40,"cssClass":"pl-kos"},{"start":41,"end":48,"cssClass":"pl-en"},{"start":48,"end":49,"cssClass":"pl-kos"},{"start":50,"end":142,"cssClass":"pl-c"}],[],[{"start":0,"end":7,"cssClass":"pl-en"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":8,"end":9,"cssClass":"pl-kos"},{"start":9,"end":73,"cssClass":"pl-c"}],[]],"csv":null,"csvError":null,"dependabotInfo":{"showConfigurationBanner":false,"configFilePath":null,"networkDependabotPath":"/EggCooperation/Javascript/network/updates","dismissConfigurationNoticePath":"/settings/dismiss-notice/dependabot_configuration_notice","configurationNoticeDismissed":false,"repoAlertsPath":"/EggCooperation/Javascript/security/dependabot","repoSecurityAndAnalysisPath":"/EggCooperation/Javascript/settings/security_analysis","repoOwnerIsOrg":true,"currentUserCanAdminRepo":false},"displayName":"ejemplosJavaScriptUtilizandoDOM.js","displayUrl":"https://github.com/EggCooperation/Javascript/blob/master/ejemplosJavaScriptUtilizandoDOM.js?raw=true","headerInfo":{"blobSize":"5.28 KB","deleteInfo":{"deletePath":"https://github.com/EggCooperation/Javascript/delete/master/ejemplosJavaScriptUtilizandoDOM.js","deleteTooltip":"Fork this repository and delete the file"},"editInfo":{"editTooltip":"Fork this repository and edit the file"},"ghDesktopPath":"https://desktop.github.com","gitLfsPath":null,"onBranch":true,"shortPath":"dbdbb21","siteNavLoginPath":"/login?return_to=https%3A%2F%2Fgithub.com%2FEggCooperation%2FJavascript%2Fblob%2Fmaster%2FejemplosJavaScriptUtilizandoDOM.js","isCSV":false,"isRichtext":false,"toc":null,"lineInfo":{"truncatedLoc":"136","truncatedSloc":"102"},"mode":"file"},"image":false,"isCodeownersFile":null,"isValidLegacyIssueTemplate":false,"issueTemplateHelpUrl":"https://docs.github.com/articles/about-issue-and-pull-request-templates","issueTemplate":null,"discussionTemplate":null,"language":"JavaScript","large":false,"loggedIn":true,"newDiscussionPath":"/EggCooperation/Javascript/discussions/new","newIssuePath":"/EggCooperation/Javascript/issues/new","planSupportInfo":{"repoIsFork":null,"repoOwnedByCurrentUser":null,"requestFullPath":"/EggCooperation/Javascript/blob/master/ejemplosJavaScriptUtilizandoDOM.js","showFreeOrgGatedFeatureMessage":null,"showPlanSupportBanner":null,"upgradeDataAttributes":null,"upgradePath":null},"publishBannersInfo":{"dismissActionNoticePath":"/settings/dismiss-notice/publish_action_from_dockerfile","dismissStackNoticePath":"/settings/dismiss-notice/publish_stack_from_file","releasePath":"/EggCooperation/Javascript/releases/new?marketplace=true","showPublishActionBanner":false,"showPublishStackBanner":false},"renderImageOrRaw":false,"richText":null,"renderedFileInfo":null,"tabSize":8,"topBannersInfo":{"overridingGlobalFundingFile":false,"globalPreferredFundingPath":null,"repoOwner":"EggCooperation","repoName":"Javascript","showInvalidCitationWarning":false,"citationHelpUrl":"https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-citation-files","showDependabotConfigurationBanner":false,"actionsOnboardingTip":null},"truncated":false,"viewable":true,"workflowRedirectUrl":null,"symbols":{"timedOut":false,"notAnalyzed":false,"symbols":[{"name":"filtrar","kind":"function","identStart":4598,"identEnd":4605,"extentStart":4598,"extentEnd":5097,"fullyQualifiedName":"filtrar","identUtf16":{"start":{"lineNumber":111,"utf16Col":6},"end":{"lineNumber":111,"utf16Col":13}},"extentUtf16":{"start":{"lineNumber":111,"utf16Col":6},"end":{"lineNumber":129,"utf16Col":1}}}]}},"copilotAccessInfo":{"accessAllowed":false,"hasSubscriptionEnded":false,"orgHasCFBAccess":false,"userHasCFIAccess":false,"userIsOrgAdmin":false,"userIsOrgMember":false,"business":null},"csrf_tokens":{"/EggCooperation/Javascript/branches":{"post":"qiObwEuk1ZksnNPhzbO420isEb4DYFSITy1va0ncEHnF44agPSyY60DNS8Jl3tbQj_fwMFRezWjhvj6me07HXw"}}},"title":"Javascript/ejemplosJavaScriptUtilizandoDOM.js at master · EggCooperation/Javascript","locale":"en"}