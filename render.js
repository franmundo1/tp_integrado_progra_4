const listadoLibros = document.querySelector("#listado-libros");
const contador= document.querySelector("#contador");

function renderizarLibros(lista=libros){
 listadoLibros.innerHTML="";

 lista.forEach(function(libros){

    const tarjeta = document.createElement("article");
    tarjeta.classList.add("tarjeta-libro");
    if(!libros.disponible){
        tarjeta.classList.add("prestado");
    }
    if(libros.favorito){
        tarjeta.classList.add("favorito");
    }

    tarjeta.innerHTML=`
    <h3>${libros.titulo}</h3>
    <p> Autor: ${libros.autor}</p>
    <p> Genero: ${libros.genero}</p>
    <p> Año: ${libros.anio}</p>
    <p> <span class="estado">
        ${libros.disponible ? "Disponible" : "Prestado"}
    </span></p>
    <button
    type="button"
    class="btn-favorito"
    data-id="${libros.id}">
    ${libros.favorito ? "Quitar de favoritos": "Marcar favorito"}
    </button>
    <button 
    type="button"
    class="btn-disponible"
    data-id="${libros.id}">
    ${libros.disponible ? "Marcar prestado" : "Marcar disponible"}
    </button>

    <button
    type="button"
    class="btn-eliminar"
    data-id="${libros.id}">
    Eliminar
    </button>
    
    `;
    listadoLibros.appendChild(tarjeta);

 });

 contador.textContent=`mostrando ${lista.length} de ${libros.length} libros`;

}