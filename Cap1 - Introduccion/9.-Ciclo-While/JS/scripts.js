var contador = 0;
var serie = 0;

while(serie < 3){
//    serie++;
//    alert('Serie igual a: '+serie);
    serie++;
    contador++;
    var  impar = contador %2;
    if(impar != 1){
        alert('Numero par'+impar);
    }
    else{
        alert('Numero impar'+impar);
    }
}
alert('Serie igual a: '+serie);