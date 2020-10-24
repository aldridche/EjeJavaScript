// let lista = new Array[10, 12, 13, 15]; ``
let lista = [10, 18, 13, 15, 20, 8, 12];

console.log(`Nuestro listado tiene ${lista.length} elementos`);
let suma=0;

for(let i = 0; i < lista.length; i++) {
    suma += lista[i];
}
// 
console.log(`El total de la suma es: ${suma}`);

/************** SLICE **************/
let sublista = lista.slice(0,4);       // cuenta los elementos a extraer de el array original
console.log(`Mi sublista es ${sublista}`);
// filter recorre la el array y la variable item devuelve una posision
let listaPar = lista.filter((item) => {
    return item % 2 == 0;
})
console.log(`El listado de pares es: ${listaPar}`);

/************** JOIN **************/
// JOIN concatena un listado
let cadenaArray = lista.join('.');
console.log(`Array concatenado con join => ${cadenaArray}`);
console.log(lista);

/************** indexOf **************/
// obtiene la posicion de un valor especificado.
let valor = 120;
let index = lista.indexOf(valor);
let contador = 0;
console.log(`El valor de ${lista[index]} se encuentra en la posicion: ${index}`);
while(index >=0){
    index = lista.indexOf(valor,index);
    if(index>=0){
        index++;
        contador++;
    }
}
console.log(`Existen ${contador} elementos con el valor ${valor}`);

/************** PUSH **************/
// agrega valores al final del listado
console.log(lista);
lista.push(150,25,10); // se pueden agregar 1 o mas valores
console.log(lista);

/************** CONCAT **************/
// cocatena un array existente con uno nuevo declarado.
let nuevaLista = [9,2,8,3,7,4,6,5];
let grupo = lista.concat(nuevaLista);
console.log(grupo);

/************** SHIFT **************/
// Elimina el primer valor del arreglo
grupo.shift();
console.log(grupo);

/************** POP **************/
// Elimina el primer valor del arreglo
grupo.pop();
console.log(grupo);

/************** SLICE y SPLICE **************/
// Elimina el primer valor del arreglo
let sublista2 = grupo.slice(0,3);
console.log(sublista2);
console.log('array final => '+grupo);

let remover = grupo.splice(0,3);
console.log(remover);
console.log('array final = '+grupo);

/************** REVERSE **************/
// Invierte la posicion de los valore el ultimo ahora esta en posicion 0
console.log('Original => '+grupo);
grupo.reverse();
console.log('inversa => '+grupo);

/****************** PARTE 3 ******************/
/****************** SORT ******************/
// ordena alfabeticamente por default
console.log('Original'+lista);
lista.sort(); // ordena alfabeticamente
var lista2 = lista.sort();
console.log('Con sort: '+lista2);

let nuevaListado = lista.map((item) => {
    return item*10;
});
console.log(nuevaListado);