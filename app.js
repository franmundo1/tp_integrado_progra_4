
const catalogo = document.querySelector("#listado-libros");

catalogo.addEventListener("click", function (evento) {
    const idLibro = Number(evento.target.dataset.id);

    if (evento.target.classList.contains("btn-favorito")) {
        const libroEncontrado = libros.find(function (libros) {
            return libros.id === idLibro;
        });

        if (libroEncontrado) {
            libroEncontrado.favorito = !libroEncontrado.favorito;
            guardarLibros();
            aplicarFiltros();
        }



    } else if (evento.target.classList.contains("btn-disponible")) {
        const libroEncontrado = libros.find(function (libros) {
            return libros.id === idLibro;
        });
        if (libroEncontrado) {
            libroEncontrado.disponible = !libroEncontrado.disponible;
            guardarLibros();
            aplicarFiltros();
        }
    } else if (evento.target.classList.contains("btn-eliminar")) {
        const posicion = libros.findIndex(function (libros) {
            return libros.id === idLibro;
        });
        if (posicion !== -1) {
            libros.splice(posicion, 1);
            guardarLibros();
            aplicarFiltros();
        }
    }
});

const formulario = document.querySelector("#form-libro");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const titulo = document.querySelector("#titulo").value.trim();
    const autor = document.querySelector("#autor").value.trim();
    const genero = document.querySelector("#genero").value;
    const anio = Number(document.querySelector("#anio").value);

    if (!titulo || !autor || !genero || !anio) {
        alert("completa todos los campos");
        return;
    }
    const nuevoLibro = {
        id: Date.now(),
        titulo: titulo,
        autor: autor,
        genero: genero,
        anio: anio,
        disponible: true,
        favorito: false
    };
    libros.push(nuevoLibro);
    guardarLibros();
    renderizarLibros();
    formulario.reset();
});
const inputBusqueda = document.querySelector("#busqueda");
const filtroGenero = document.querySelector("#filtro-genero");
const soloFavoritos = document.querySelector("#solo-favoritos");

function aplicarFiltros() {
    const textoBuscado = inputBusqueda.value.trim().toLowerCase();
    const generoSeleccionado = filtroGenero.value;
    const mostrarSoloFavoritos = soloFavoritos.checked;

    const librosFiltrados = libros.filter(function (libros) {
        const coincideBusqueda =
            libros.titulo.toLocaleLowerCase().includes(textoBuscado) ||
            libros.autor.toLocaleLowerCase().includes(textoBuscado);

        const coincideGenero =
            generoSeleccionado === "todos" ||
            libros.genero === generoSeleccionado;

        const coincideFavorito =
            mostrarSoloFavoritos ? libros.favorito : true;

        return coincideBusqueda &&
            coincideGenero &&
            coincideFavorito;
    });

    renderizarLibros(librosFiltrados);
    
}

function guardarLibros() {
    localStorage.setItem("libros", JSON.stringify(libros));
}

inputBusqueda.addEventListener("input", aplicarFiltros);
    filtroGenero.addEventListener("change", aplicarFiltros);
    soloFavoritos.addEventListener("change", aplicarFiltros);

    aplicarFiltros();