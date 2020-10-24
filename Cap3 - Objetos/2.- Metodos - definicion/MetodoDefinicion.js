let empleado = {
    nombre: 'Aldrid',
    edad: 29,
    'talla camisa': 'Mediana',
    equipo: {
        'sistema Operativo': 'linux mint',
        marca: 'Dell',
        modelo: 'Inspirion 15 3000'
    },
    mostrarDatos: function() { // Metodo sin parametros de entrada
        console.log(`Nombre: ${empleado.nombre}\r\nEdad: ${empleado.edad}`);
    },
    cambiarNombre: function(nuevoNombre) {
        let anterior = empleado.nombre; // anterior toma el valor original de la variable nombre
        empleado.nombre = nuevoNombre;
        return anterior    // retorna el nombre anterior de la variable
    }
}

var anterior = empleado.cambiarNombre('Jose Luis');

console.log(`El nombre anterior era: ${anterior}`);


empleado.mostrarDatos();
/***************** Metodo para actualizar el nombre del empleado *****************/
