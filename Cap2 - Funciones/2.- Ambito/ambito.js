var variableGlobal = 5;

function miFuncion (){
    var variableLocal = 10;
    console.log(`Variable local: ${variableLocal}¸\n Variable global: ${variableGlobal}`);
}

//miFuncion();

var tiempo = 60;
var elementos = 10;
function printMassage (valor, contador) {
    console.log(valor);
    console.log(contador);
}

// printMassage(tiempo, elementos);
// console.log('\nAhora las variables valen----');
// printMassage(100, 200);

// printMassage(tiempo, elementos);

function areaTria  (base,altura){
    var area = (base * altura)/2;
    return area;
}
var resultado = areaTria(10, 30);

// console.log(resultado);

var a = 76;
var b = 25;

function compara (valor1, valor2){
    var total = valor1 + valor2;

    if (total > 100){
        return total;
    } else {
        return 0;
    }
}

var resultado1 = compara (a,b);

console.log(resultado1);

