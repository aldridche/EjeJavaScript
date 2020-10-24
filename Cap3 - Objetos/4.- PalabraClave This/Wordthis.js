// `
let empleado = {
    nombre: 'Aldrid',
    edad: 29,
    mostrarDatos: function() {
        console.log(`Nombre: ${this.nombre}\r\nEdad: ${this.edad}`);
    },
    cambiarNombre: function(nombreNuevo){
        let nombreAnterior = this.nombre;
        this.nombre = nombreNuevo;
        return nombreAnterior;
    },
}

empleado.mostrarDatos();