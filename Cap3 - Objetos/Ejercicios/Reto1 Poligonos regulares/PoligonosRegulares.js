//` Formula=    A=P*a2
let triangulo = {
    lados: 0,
    apotema: 0,
    inicializar: function (a,b){
        triangulo.lados = a;
        triangulo.apotema = b;
    },
    mostrarDatos: function(){
        console.log(`Lado= ${triangulo.lados}\r\nApotema: ${triangulo.apotema}`);
    },
    perimetroTri: function(){
        
        let perimetroImp = this.lados + this.lados + this.lados;
        return perimetroImp;
    },
    areaTriangulo: function(){
        let area = this.perimetroTri() * (this.apotema ** 2);
        return area;
    },
}

triangulo.inicializar(7,3.5);
triangulo.mostrarDatos();
var perim = triangulo.perimetroTri();
var areaT = triangulo.areaTriangulo();
console.log(`El perimetro es igual a ${perim} m`);
console.log(`El area del triangulo es ${areaT} m2`);