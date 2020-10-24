/************ coordenadas de mouse ************/
const mostrarPosition = (e) => { // ubicacion del mouse en cordenadas
    alert(`Posicion: ${e.clientX} / ${e.clientY}`);
}
/************ coordenadas de mouse ************/
/************* Barra de progreso *************/
const movimiento = () => {
    const contenedor = document.getElementById('contenedor');
    contenedor.addEventListener('mousemove', moverBarra);
}
const moverBarra = (e) => {
    let barra = e.offsetX - 10; // obtener posicion de la barra menos 10px
    if(barra < 0)    {
        barra = 0;      // minimo de la barra
    } else if (barra > 500){
        barra = 500;    // maximo de la barra
    }
    const elementoBarra = document.getElementById('barraProgreso');
    elementoBarra.style.width = `${barra}px`;
}
/************* Barra de progreso *************/
/************* Tecla presionada *************/
const detectarTecla = (e) => {
    const tecla = e.key;
    const bloque = document.getElementById('bloque');

    switch(tecla){
        case '0':
            bloque.style.backgroundColor = 'red';
            break;
        case '1':
            bloque.style.backgroundColor = 'blue';
            break;
        case '2':
            bloque.style.backgroundColor = 'green';
            break;
        case '3':
            bloque.style.backgroundColor = 'black';
            break;
        case '4':
            bloque.style.backgroundColor = 'yellow';
            break;
        default:
            bloque.style.backgroundColor = 'white';
            break;
    }
}
/************* Tecla presionada *************/
addEventListener('keydown', detectarTecla);
addEventListener('load', movimiento);       // barra progreso
addEventListener('click', mostrarPosition); // coordenadas de mouse