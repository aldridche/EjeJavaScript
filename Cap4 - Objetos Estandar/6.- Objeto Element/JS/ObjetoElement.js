// ``
function iniciar() {
    let element = document.getElementById('subtitulo'); // sustituye el uso de CSS
    element.style.width = '300px';
    element.style.border = '5px solid red';
    element.style.padding = '20px';
}
function modificarProps() {
    let elemento = document.getElementById('subtitulo');
    let ancho = elemento.clientWidth;
    ancho += 100;

    elemento.style.width = `${ancho}px`;
}
function ponerColor() {    // con esta propiedad al hacer click en un boton se aplica el estilo indicado
    let elementoColor = document.getElementById('subtitulo');
    elementoColor.className = 'colorNegro';
}
/*********** Retirar o sustituir una clase ***********/
function cambiarColor() {
    let elementChange = document.getElementById('subtitulo');
    let color = 'colorAzul';    // nombre del identificador de estilo
    // ClassList nos indica las clases referenciadas en el objeto
    // contains responde con true o false si se encuetra o no
    /*if(elementChange.classList.contains(color)) {   // si la clase esta
        elementChange.classList.remove(color);      // la removemos con esta instruccion
    }
    else {                                          // si la clase no esta
        elementChange.classList.add(color);         // la agregamos 
    }*/
/*********** El if/else,  es lo mismo la funcion toggle ***********/
    elementChange.classList.toggle(color);
}

function cambiarText() {
    let element = document.getElementById('subtitulo');
    let textoinsert = `${element.innerHTML} bienvenidos`;
    element.innerHTML = textoinsert;
}
function addElement() {
    let elemento = document.querySelector('section');
    // elemento.innerHTML = '<p>Este es un nuevo texto que sustituya a section usando let elemento = document.querySelector("section");</p>';
    
    // agregar tags a l html desde JS
    elemento.insertAdjacentHTML("beforeend", "<p class='colorAzul'>Este es un nuevo elemento</p>");
}