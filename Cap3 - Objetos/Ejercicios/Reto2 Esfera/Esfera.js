//` Volumen de esfera=   V= (4/3) * Pi * (r*r*r)
const pi = 3.1416;
let esfera = {
    radio: 0,
    pi: 3.1415,
    //const: pi=3.1416,
    inicializar: function (a){
        esfera.radio = a;
    },
    mostrarDatos: function(){
        console.log(`El radio es = ${esfera.radio}\r\nPI es = : ${this.pi}`);
    },
    volumenEsfera: function(){
        let volumen = ((4/3)* this.pi * (this.radio ** 3));
        return volumen;
    },
    perimetroCirculo: function(){
        let perimetroCir = 2 * ( this.pi * this.radio);
        return perimetroCir;
    },
    areaCirculo: function(){
        let areaC = this.pi * (this.radio ** 2);
        return areaC;
    },
};

esfera.inicializar(7);
esfera.mostrarDatos();
var volumenE = esfera.volumenEsfera();
console.log(`El volumen de la esfera es igual a: ${volumenE}`);
var circuloEs = esfera.areaCirculo();
console.log(`El area del circulo es igual a: ${circuloEs}`);
var perimetroC = esfera.perimetroCirculo();
console.log(`El perimetro del circulo es: ${perimetroC}`);