let temperatura =   [h0 = 20, h1 = 16,h2 = 20,h3 = 20,h4 = 16,h5 = 18,h6 = 15,h7=20,h8 = 17, h9=18, h10=22,
                    h11 = 14,h12 = 20,h13 = 20,h14 = 16,h15 = 18,h16 = 15,h17=20,h18 = 17, h19=18, h20=20,
                    h21 = 16,h22 = 20,h23 = 20];
var recorre = 0;
var mayor = 0;
function funPromedio(temperatura, recorre){
     console.log('Array completo');

     for(var i = 0; i < temperatura.length; i++) {
          recorre += temperatura[i];
     }
     var promedio = recorre/temperatura.length;
     return promedio;
}
var funPro = funPromedio(temperatura, recorre);
console.log('La temperatura promedio es: '+funPro);

function numMayor(temperatura, mayor){
     for(i = 0; i < temperatura.length; i++){
         if (temperatura[i] > mayor)
         {
             mayor = temperatura[i];
         }
     }return mayor;
}
var numM = numMayor(temperatura, mayor);
console.log('La temperatura mayor es: '+numM);
var  menor=numM;                                  // se iguala a el mayor, en caso de ser sero, se daria un error
function numMenor(temperatura, menor){
     for(i = 0; i < temperatura.length; i++){
          if (temperatura[i] < menor)
          {
               menor = temperatura[i];
          }
     }return menor;
}
var numMen = numMenor(temperatura, menor);
console.log('La temperatura menor es: '+numMen);