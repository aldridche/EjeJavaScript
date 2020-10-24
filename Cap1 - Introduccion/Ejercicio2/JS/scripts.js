var contador = 0;
var bandera = -1;
var resultado = 0;
var denominador = 1;
var bol = false;
do{
    contador++;
    bandera *= (-1);
    // alert(resultado + '4/'+denominador+' * '+bandera);
    resultado += ((4/denominador)*bandera);
    alert('Pi = '+resultado);
    denominador+=2;
    // alert(denominador)
    bol=(resultado < 3.2 && resultado > 3);
    // alert(bol);
} while(bol != true);
alert('El valor final de PI es: '+resultado);

