// const valor = 10;
// console.log('Hola valor: ', valor, valor*10);
// console.assert(valor < 5, 'Fallo');     // mostrar un resultado falso
// console.clear();    // limpiar consola
const mostrarError= (e) => {
    console.log('Error', e.error);
    console.log('Mensaje', e.message);  // mensaje donde se encuentra el error
    console.log('Linea', e.lineno);     // linea donde se encuentra el error
    console.log('Columna', e.colno);    // columna donde se encuentra el error
    console.log('URL', e.filename);     // ruta del error (archivo)

}

addEventListener('error', mostrarError);
miFunction();