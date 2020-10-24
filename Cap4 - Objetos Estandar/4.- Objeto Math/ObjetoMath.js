// let valor = new Number('123.645') // convertimos de string a numero con Number
let valor = 165.645;
// console.log(valor);

// console.log(Math.PI);   // constante predeterminada pi
// console.log(Math.E);    // constante predeterminada e

console.log(`Ceil: ${Math.ceil(valor)}`);   // aproxima el valor a el siguiente numero
console.log(`Floor: ${Math.floor(valor)}`); // aproxima el valor a el numero anterior a ese
console.log(`round: ${Math.round(valor)}`); // redondea a un numero abajo o arriba del .5
console.log(`trunc: ${Math.trunc(valor)}`); // Toma los valores solo enteros

console.log(`ABS: ${Math.abs(-50)}`);       // hace positivos a los numeros

console.log(`MAX: ${Math.max(12,15,16,94,21,101,54)}`);     // obtiene el mayor y no reciben array
console.log(`MIN: ${Math.min(12,15,16,94,21,101,4)}`);      // obtiene el menor y no reciben array

console.log(`RANDOM: ${Math.random()}`);                    // genera un numero aleatorio entre 1 y cero

let limiteMax = 25;
let limiteMin = 15;

// let intervalo = Math.random() * (limiteMax - limiteMin) + limiteMin;    // se indica un rango
let intervalo = Math.floor(Math.random() * (limiteMax - limiteMin) + limiteMin);
console.log(`Numero aleatorio entre ${limiteMin} - ${limiteMax}: ${intervalo}`); 

console.log(Math.pow(4,2));
console.log(Math.sqrt(4));