let mes = 10;
let capital = 1500;
let tasa = 8;

let fondoIversion = ((mes, capital, tasa) =>{
    let ganancia = ((capital/100)*tasa)*mes;
    return ganancia;
})(mes, capital, tasa);

console.log(`La ganancia es de $${fondoIversion} despues de ${mes} meses.`)