const agregarEvento = () => {
    const elemento = document.querySelector('section > button');
    elemento.addEventListener('click', mostrarMensaje);

    let lista = document.querySelectorAll('section > p');

    for (let i =0; i < lista.length; i++){
        let elemento = lista[i];
        const random = Math.random(); // parametro de entrada
        elemento.addEventListener('click', cambiarColor);
        elemento.addEventListener('click', (e) =>  { 
            cambiaContenido(e,random, i);
        });
    }
}
const cambiaContenido = (e, valor, indice)=> {
    e.target.innerHTML = `Valor: [${indice}]= ${valor}`;
}
const cambiarColor = (e) => {
    e.target.style.backgroundColor = '#9999';
}

// e sirve para generar el evento de un mouse
const mostrarMensaje = (e) => {
    alert(`Event ${e}\r\nTarget: ${e.target}\r\nTipo: ${e.type}`);
};

addEventListener('load', agregarEvento);
