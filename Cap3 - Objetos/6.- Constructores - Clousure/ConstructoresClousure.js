let constructor = (nombreInicial, edadinicial) => {   // declaracion de un constructor
        let nombre = nombreInicial;
        let edad = edadinicial;
        let objeto = {
        equipo: {
            SO: 'Linux mint',
            marca: 'Dell',
        },
        mostrarDatos: function() {
            console.log(`Nombre: ${nombre}\r\nEdad: ${edad}`);
        },
        cambiarNombre: function(nombreNuevo){
            let nombreAnterior = nombre;
            nombre = nombreNuevo;
            return nombreAnterior;
        }
    }
    return objeto

}
let empleado1 = constructor('Aldrid',29);  // instancia del construtor
let empleado2 = constructor('Jesus', 18);  // instancia del construtor
let empleado3 = constructor('Dayana', 13);  // instancia del construtor
// empleado1.mostrarDatos();
// empleado2.mostrarDatos();
// empleado3.mostrarDatos();
// empleado3.cambiarNombre('Judith');   // forma 1 de colocar datos en una variable
empleado3.nombre = 'Excelsa';           // forma 1 de colocar datos en una variable
// empleado3.mostrarDatos();

console.log(empleado3);