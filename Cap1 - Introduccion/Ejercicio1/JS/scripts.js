var listado = [2,4,5,6,8,9,10,12];
var longitud = 8;
var sumaPar = 0;
var sumaImpar = 0;
var contador = 0;

for(var i = 0; i < longitud; i++){
    contador = listado[i];

    if((contador % 2)==0){
        sumaPar += listado[i];
        alert('Suma par= '+sumaPar);
    }
    else{
        sumaImpar += listado[i];
        alert('Suma impar= '+sumaImpar);
    }
}