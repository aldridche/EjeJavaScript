let empleado = {
    nombre: 'Aldrid',
    edad: 30,
    'talla camisa': 'Mediana',
    objetoEquipo: {
        SO: 'Linux Mint',
        marca: 'Dell'
    }
}
/******************** Acceder a los datos del objeto ********************/
// console.log(empleado);
// console.log(`Nombre: ${empleado.nombre} Edad: ${edad}`);

let propiedad = 'nombre';
let tallaCamisa = 'talla camisa';
// console.log(propiedad + ': '+ empleado[propiedad]);   //acceder a la propiedad nombre del objeto empleado.
// console.log(empleado['talla camisa']);  // acceder a la propiedad "talla camisa"
// console.log(empleado[tallaCamisa]);  // acceder a la propiedad "talla camisa"

/******************** Acceder al objeto equipo dentro del objeto empleado ********************/
// console.log(empleado.objetoEquipo.SO);

/******************** Modificar la informacion de una propiedad dentro de un objeto ********************/

empleado.nombre = 'Aldrid Jesus';
// agregar una nueva propiedad

empleado.puesto = 'Desarrollador';

console.log(empleado);
console.log(empleado.nombre);


