// ``
/********** Agregar elementos **********/
function addTags(){
    let element = document.querySelector('section');
    let nuevoTags = document.createElement('p');
    nuevoTags.innerHTML = 'Este es un nuevo elemento';   // insertar caracteristicas
    element.appendChild(nuevoTags);     // esto agregara un nuevo elemento
}
/********** Eliminar elementos **********/
function deletedE() {
    let elemento = document.querySelector('section');
    let elimina = document.getElementById('subtitulo');

    elemento.removeChild(elimina);
}