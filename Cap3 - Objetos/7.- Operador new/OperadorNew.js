// ` Const9
function miObjeto(nombreInicial, edadInicial) {
    this.nombre = nombreInicial;
    this.edad = edadInicial;
    this['talla camisa'] = 'Chica';
    this.equipo = {
        SO: 'Linux mint',
        marca: 'Dell',
    };
    this.mostrarDatos = function() {
        console.log(`Nombre: ${this.nombre}\r\nEdad: ${this.edad}`);
    };
    this.cambiarNombre = function(nombreNuevo){
        let nombreAnterior = this.nombre;
        this.nombre = nombreNuevo;
        return nombreAnterior;
    };

}

let empleado1 = new miObjeto('Juanita', 15);
empleado1.mostrarDatos();
// console.log(empleado1);
