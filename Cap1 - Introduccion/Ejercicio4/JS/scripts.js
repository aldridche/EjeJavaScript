/**En un hospital de la Ciudad de México se creó un esquema para determinar los gastos médicos que 
 * un paciente tendrá que pagar por concepto de servicio hospitalario solicitado.
 * 
 * Crea un programa que permita calcular el costo de internación de un cliente según los datos en 
 * la siguiente tabla. 
*/

var tratamiento = 0;
var edad = 25;
var tiempo = 0;
var costo = 0;

if(edad>=0 && edad <=15){
    tratamiento = 1;
    tiempo = 5;
    switch(tratamiento){
        case 1:
            tiempo = 2;
            costo= tiempo*((2800*100)/15);
            alert('Tratamiento para menores de 15 años\nEl costo de tratamiento total es de $'+costo);
        break;
        case 2:
            tiempo = 2;
            costo= tiempo*((1950*100)/15);
            alert('Tratamiento para menores de 15 años\nEl costo de tratamiento total es de $'+costo);
        break;
        case 3:
            tiempo = 2;
            costo= tiempo*((2500*100)/15);
            alert('Tratamiento para menores de 15 años\nEl costo de tratamiento total es de $'+costo);
        break;
        case 4:
            tiempo = 2;
            costo= tiempo*((1150*100)/15);
            alert('Tratamiento para menores de 15 años\nEl costo de tratamiento total es de $'+costo);
        break;
        default:
            alert('El traramiento especificado no existe...');
            break;
    }

}
else if(edad>=60){
    tratamiento = 1;
    tiempo = 3;
    switch(tratamiento){
        case 1:
            tiempo = 2;
            costo= tiempo*((2800*100)/25);
            alert('Tratamiento 60 y mas!!\nEl costo de tratamiento total es de $'+costo);
        break;
        case 2:
            tiempo = 2;
            costo= tiempo*((1950*100)/25);
            alert('Tratamiento 60 y mas!!\nEl costo de tratamiento total es de $'+costo);
        break;
        case 3:
            tiempo = 2;
            costo= tiempo*((2500*100)/25);
            alert('Tratamiento 60 y mas!!\nEl costo de tratamiento total es de $'+costo);
        break;
        case 4:
            tiempo = 2;
            costo= tiempo*((1150*100)/25);
            alert('Tratamiento 60 y mas!!\nEl costo de tratamiento total es de $'+costo);
        break;
        default:
            alert('El traramiento especificado no existe...');
            break;
    }
}
else{
    tratamiento = 1;
    tiempo = 3;
    switch(tratamiento){
        case 1:
            tiempo = 2;
            costo= tiempo*(2800*100);
            alert('El costo de tratamiento total es de $'+costo);
        break;
        case 2:
            tiempo = 2;
            costo= tiempo*(1950*100);
            alert('El costo de tratamiento total es de $'+costo);
        break;
        case 3:
            tiempo = 2;
            costo= tiempo*((2500*100)/25);
            alert('El costo de tratamiento total es de $'+costo);
        break;
        case 4:
            tiempo = 2;
            costo= tiempo*((1150*100)/25);
            alert('El costo de tratamiento total es de $'+costo);
        break;
        default:
            alert('El traramiento especificado no existe...');
            break;
    }
}