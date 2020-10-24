//length => cuenta los caracteres o posiciones de un arreglo
/************* contar caracteres de un strin *************/
let cadena = 'Hola mundo';
let mensaje = `Buestro texto tiene ${cadena.length} caracteres`;
console.log(mensaje);
console.log(cadena[3]);

let texto = '';
for(let i = 0; i<cadena.length; i++){
    texto += cadena[i] + '.';
}
// console.log(texto);
// let miCadena = cadena.toUpperCase();     // <= cambia texto a MAYUSCULAS
// console.log(miCadena);
// console.log(miCadena.toLowerCase());     // <= cambia texto a minusculas
// console.log(cadena.substr(0,6));         // <= extraer caracteres de una cadena en un rango desde el inical 0 hasta doonde se indique el segundo numero
// console.log(cadena.substr(7));           // <= extrae caracteres despues del especificado en una cadena
// console.log(cadena.substr(-7));          // <= extrae caracteres despues del especificado en una cadena

// console.log(cadena.startsWith('How'));   // define si los caracteres indicados estan en la cadena (true o false)
// console.log(cadena.endsWith('do'));      // verificar si la palabra es igual a las letras indicadas (true o false)

console.log(cadena.includes('m'));          // verificar si hay un caracter en el string
console.log(cadena.indexOf('undo'));        // cuenta los caracteres restantes del string
console.log(cadena.replace('mundo', 'a todos'));        // remplaza los caracteres indicados por la seguna indicacion