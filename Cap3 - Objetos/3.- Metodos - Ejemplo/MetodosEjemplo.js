/** Cree un objeto que modele un triangulo
 * Las propiedades iniciales son la base y la altura
 * El objeto debe tener los metodos para calcular el area y perimetro del triangulo
 **/
let triangulo = {
    base: 0,
    altura: 0,
    inicializar: function (a,b){
        triangulo.base = a;
        triangulo.altura = b;
    },
    mostrarDatos: function(){
        console.log(`Base: ${triangulo.base}\r\nAltura: ${triangulo.altura}`);
    },
    areaTriangulo: function(){
        let area = (triangulo.base * triangulo.altura)/2;
        return area;
    },
    hipotenusaTria: function(){
        // c2 = a2 + b2 
        let hipotenusa = Math.sqrt((triangulo.base ** 2) + (triangulo.altura ** 2));
        return hipotenusa;
    },
    perimetroTriangulo: function() {
        let perimetro = triangulo.base + triangulo.altura + triangulo.hipotenusaTria();
        return perimetro;
    }
}

triangulo.inicializar(50,70);
triangulo.mostrarDatos();
var area = triangulo.areaTriangulo();
console.log(`El area del triangulo es: ${area} m2`);
console.log(`Hipotenusa: ${triangulo.hipotenusaTria()}`);
console.log(`El perimetro del triangulo es: ${triangulo.perimetroTriangulo()}`);
