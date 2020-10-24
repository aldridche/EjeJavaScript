/*var i = 0;
var j = 0
for(i>=0; i<=10; i++){
    i;
    j+=1;
    alert('Hola '+i+' y '+j);
}
// fuera del for
var suma = 0;

for(var i = 0; i<=5; i++){
    suma += 10;
}
alert(suma);
*/
/*********** Recorrer un array ***********/
/*
var arrglo = [1,2,3,4,5,6];
var recorreA = 0;

for( var i = 0; i< 6; i++ ){
    recorreA += arrglo[i];
}
alert(recorreA);
*/
/*********** Recorrer un array doble ***********/

var arrayDoble = [[1,3,3],[4,5,6],[7,8,9]];
var recorreA = 0;

for( var i = 0; i< 3; i++ ){
    for( var j = 0; j< 3; j++ ){
        recorreA += arrayDoble[i][j];
        alert(recorreA);
    }
}
alert('suma total: '+recorreA);