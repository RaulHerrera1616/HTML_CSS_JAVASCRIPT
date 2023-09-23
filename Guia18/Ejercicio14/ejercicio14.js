/*Crear un objeto libro que contenga las siguientes propiedades: ISBN, Título, Autor,
Número de páginas. Crear un método para cargar un libro pidiendo los datos al usuario
y luego informar mediante otro método el número de ISBN, el título, el autor del libro y el
numero de páginas.*/

    function Libro(isbn, titulo, autor, numPaginas) {
        this.isbn = isbn;
        this.titulo = titulo;
        this.autor = autor;
        this.numPaginas = numPaginas;

        this.cargarLibro = function () {
            this.isbn = prompt("Ingrese el ISBN del libro");
            this.titulo = prompt("Ingrese el titulo del libro");
            this.autor = prompt("Ingrese el autor del libro");
            this.numPaginas = parseInt(prompt("Ingrese el numero de paginas del libro"));
        }

        this.infoLibro = function (){
            alert("ISBN: " + this.isbn +
          "\nTitulo del Libro: " + this.titulo +
          "\nAutor del Libro: " + this.autor +
          "\nNumero de paginas: " + this.numPaginas);
        }
    }

    const libro = new Libro();
    libro.cargarLibro();
    libro.infoLibro();