/******* Funcion normal *******/
function sumatoria(a,b){
    let total = a + b;
    return total;
}

/******* Funcion anonima *******/
let sumaAnonima = function (a,b){
    let total = a + b;
    return total;
}

let ejecutarFuncion = function (f,valor1, valor2){
    let resultado = f(valor1, valor2);
    return resultado;
}
// console.log(sumatoria(5,10));
// console.log(sumaAnonima(8,2));

// console.log(ejecutarFuncion(sumaAnonima, 5, 6));


/******* Funcion anonima autoejecutable *******/
let operacionAnonima = (function (a,b) {
    let total = a + b;
    return total;
})(20,25);

// console.log(operacionAnonima);

/******* Funcion flecha *******/
let operacionAninimaFlecha = (a,b) =>{
    let total = a +b;
    return total;
}

console.log(operacionAninimaFlecha(25,125));
/******* Funcion flecha autoejecutables *******/
let operacionAninimaFlechaAuto = ((a,b) =>{
    let total = a +b;
    return total;
})(225,225);

console.log(operacionAninimaFlechaAuto);