// ` Const9
let empleado = {
    nombre: 'Dayana',
    edad: 13,
    'talla camisa': 'Chica',
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
    },
};

let empleado1 = Object.create(empleado);    // se crea una instancia a partir del metodo empleado
let empleado2 = Object.create(empleado);    // Instancia que usaremos para herencia
empleado1.cambiarNombre('Judith');
empleado1.edad = 14;
empleado2.cambiarNombre('Judith Mtz');
empleado2.edad = 1;

/************** Metodo de herencia **************/
empleado.mostrarEdad = function (){
    console.log('Edad: '+this.edad);
}

empleado2.mostrarEdad();    // se ereda el metodo a todas las instancias creadas
empleado1.mostrarEdad();