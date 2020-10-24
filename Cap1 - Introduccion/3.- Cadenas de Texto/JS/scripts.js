var texto = 'Hola mundo';
var presentacion = ', soy aldrid';

texto += presentacion; // una manera de concatenar...
// alert(texto);

/***************** Manera 2 de concatenar numeros y texto *****************/

var edad = 'Mi edad es: ';
edad += 28;
// alert(edad);

/***************** Manera 3 de concatenar numeros y texto *****************/
var numeros = '20';
numeros += 10;
//alert(numeros)
/***************** Manera 4 de concatenar numeros y texto *****************/
var perros = 5;
var gatos = 3;
var mascotas = 'Tenemos ' + perros + ' tenemos ' + gatos;
var mascotas2 = `Tenemos ${perros} y tambien tenemos ${gatos}`;
alert(mascotas2);

