const librosIniciales = [
    {
        id: 1,
        titulo: "Lo que el agua se llevó",
        autor: "Francisco Mandolino",
        genero: "fantasia",
        anio: 2007,
        disponible: true,
        favorito: false
    },
    {
        id: 2,
        titulo: "El señor de los anillos",
        autor: "J. R. R. Tolkien",
        genero: "fantasia",
        anio: 1954,
        disponible: true,
        favorito: false
    }
];

const librosGuardados = JSON.parse(localStorage.getItem("libros"));

const libros = librosGuardados
    ? librosGuardados
    : librosIniciales;