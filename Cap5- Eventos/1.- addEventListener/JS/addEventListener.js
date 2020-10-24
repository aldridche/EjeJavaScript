const agregarEvento = () => {
    const elemento = document.querySelector('section > button');
    elemento.addEventListener('click', mostrarMensaje);
}

const mostrarMensaje = () => {
    alert('Presionó el botón');
};

addEventListener('load', agregarEvento);
