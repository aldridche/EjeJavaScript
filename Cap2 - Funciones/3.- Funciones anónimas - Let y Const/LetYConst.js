//var i = 'global';
function miFuncion(){
    var i = 'local';
    console.log(i);
}
// miFuncion();
// console.log(i);
var i = 1;

/******************* VARIABLE LET *******************/

var valor = 10;
var valor = 20;
// en este caso valor sobreescribe el valor de la variabloe valor

let valor1 = 19;
let valor2 = 29;
//Let no permite sobreescribir wl valor de la variable valor1, e indica un error al intentarlo hacer...

const edad = 29;
edad *= 2;
console.log(edad);
