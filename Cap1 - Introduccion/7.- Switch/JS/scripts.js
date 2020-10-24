var miPro = 2;
var condision = '';
/*
if (miPro == 1) {
    alert('Aprobado');
}
else if( miPro == 2){
    alert('Regular');
}
else if (miPro == 3){
    alert('Malo');
}
else {
    alert('Valor fuera de rang');
}*/
var calidad = 2;
var condisionSW = '';

switch(calidad){
    case 1:
        alert('Aprobo de manera excelente');
        break;

    case 2: {
        alert('Obtuvo calificacion aprobatoria' + calidad);
        break;
    }
    case 3:
        alert('Reprobado');
        break;
    default: 
        alert('Valor no aceptado');
}