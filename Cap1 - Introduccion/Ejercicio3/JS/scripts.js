/**Se requiere calcular el precio de ida y vuelta en ferrocarril, 
 * conociendo tanto la distancia entre las dos ciudades como el tiempo de estancia en la ciudad destino.
 * Si el número de días de estancia es superior a 10 y la distancia total (ida y vuelta) a recorrer es superior a 500k,
 * el precio del billete se reduce en 20%. El precio por km es de $0.19.
 * 
 * Datos: Distancia, Tiempo y Costo
 * Donde:
 * Distancia: Variable de tipo numérico que expresa la distancia entre las dos ciudades en km
 * Tiempo: Variable de tipo numérico que expresa el tiempo de estancia en días.
 * Costo: Variable de tipo numérico que expresa el monto a pagar por el viaje */

var distancia = 0;
var tiempo = 9;
var costo = 0;

if(tiempo > 10){
    distancia = 5000000;
    costo= ((0.19 * 100)/20);

    var resultado = distancia * costo;
    alert('El costo de su viaje es de $'+resultado+' pesos.\nLa enstancia sera de: '+tiempo+' dias');
}
else{
    distancia = 1000;
    costo= ((0.19 * 100)/20);

    var resultado = distancia * costo;
    alert('El costo de su viaje es de  $'+resultado+' pesos.\nLa estancia sera de : '+tiempo+' dias');
}