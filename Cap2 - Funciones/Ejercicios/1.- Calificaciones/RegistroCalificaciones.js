var sumabaja = 0;
var promedio = 0;
function sumaCalificaciones(sumabaja, promedio){
    
    var calificaciones = [2.55, 4.89, 6.89, 8.58, 9.5, 3.01, 5, 7.58, 8.89, 9.99];
    for(var i = 0; i<10; i++ ){
        sumabaja += calificaciones[i]; 
        promedio = (promedio + sumabaja)/10;
        //alert(promedio);
    }
    return promedio;
}

var res = sumaCalificaciones(sumabaja, promedio);
alert(res);