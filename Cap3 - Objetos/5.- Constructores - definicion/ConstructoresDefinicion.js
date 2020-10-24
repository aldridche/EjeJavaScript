// ` Const9
let constructor = (nombreInicial, edadinicial) => {   // declaracion de un constructor
    let objeto = {
        nombre: nombreInicial,
        edad: edadinicial,
        'talla camisa': 'Mediana',
        equipo: {
            SO: 'Linux mint',
            marca: 'Dell',
        },
        mostrarDatos: function() {
            console.log(`Nombre: ${this.nombre}\r\nEdad: ${this.edad}`);
        },
        cambiarNombre: function(nombreNuevo){
            let nombreAnterior = this.nombre;
            this.nombre = nombreNuevo;
            return nombreAnterior;
        }
    }
    return objeto

}
let empleado1 = constructor('Aldrid',29);  // instancia del construtor
let empleado2 = constructor('Jesus', 18);  // instancia del construtor
let empleado3 = constructor('Dayana', 13);  // instancia del construtor
empleado1.mostrarDatos();
empleado2.mostrarDatos();
empleado3.mostrarDatos();
empleado3.cambiarNombre('Judith');
empleado3.mostrarDatos();