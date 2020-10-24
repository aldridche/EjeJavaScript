// ``
//contructor date elaborado en milisegundos.
let fecha = new Date(2020,0,1); // 2020/Ene/01 el mes 1 para JS es la posicion 0
let fechaHoy = new Date();      // esto indica la fecha y hora actual
console.log(fecha);
// console.log(fechaHoy);

let anio = fecha.getFullYear(); // retorna un año dado
// console.log(anio);              // muestra un año indicado en el objeto especificado
// console.log(fecha.getMonth());  // muestra un mes indicado en el objeto especificado
// console.log(fecha.getDate());   // muestra un fecha indicado en el objeto especificado

/************ modificar una fecha ************/
fecha.setDate(fecha.getDate() + 15);  //setDate cambia la fecha en milisegundos, en este caso se obtiene la fecha y se agragan 15 dias
console.log(fecha);

/************ comparar una fecha ************/
let fecha1 = new Date(2020,1,1, 12,30);
let fecha2 = new Date(2020,5,27, 14,30);

// fecha1.setHours(0,0,0);             // resetea la hora
// fecha2.setHours(0,0,0);             // resetea la hora
if(fecha1.getTime() == fecha2.getTime()) {
    console.log('Las fechas son iguales');
}
else {
    console.log('Las fechas son diferentes');
}
let intervalo = fecha2 - fecha1;    // devolveria en milisegundos
let dias = intervalo/ (24 * 60 * 60 * 1000);   // para obtenerlo en dias se divide entr (horas, minutos, segundos y lo equivalente a una milesima)

console.log(intervalo);
console.log(dias);