/****************** Funciones estandar ******************/
// isNAN --> no es numerica
/*
let miVariable = '25.58';

if(isNaN(miVariable)){
    console.log(`${miVariable} no es un numero...`);
} else {
    // let miNumero = parseInt(miVariable);    // convierte una cadena en un valor numerico de tipo entero...
    let miFlotante = parseFloat(miVariable);    // convierte a la variable en un valor de coma flotante
    console.log(`${miVariable} es un numero...`);
    console.log(miFlotante);
}
*/

let nombre = 'Aldrid Jesus';
/**Si se quisiera usar la palabra en un sitio, no seria posible porque existe un espacio entre los nombres */
let codificar = encodeURIComponent(nombre); // Se utiliza encodeURIComponent para codificar el contenido de la variable y utilizarlo en la URL
let decodificar = decodeURIComponent(codificar); // Se utiliza dencodeURIComponent para decodificar el contenido de codificar proceso inverso al anterior
let url = `http://mipagina.com/perfil/${codificar}`;

console.log(url);
console.log(decodificar);
