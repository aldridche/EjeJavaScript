var j =0;
var recorre = 0;
var mayor = 0;
var vari=0;
var  menor;
var temArray = [];
var position = [];
let tempFun = (temperatura) =>{
     temp = temperatura;
     return {
          funArTemp: function () {
               position = temArray.push(temp);
               console.log(position);
               return temArray;
          },
          funPromedio: function() {
               console.log('Array');
               for(var i = 0; i < temArray.length; i++) {
                    recorre += temArray[i];
               }
               var promedio = recorre/temArray.length;
               recorre=0;
               return promedio;
          },
          numMayor: function() {
               for(i = 0; i < temArray.length; i++){
                   if (temArray[i] > mayor)
                   {
                       mayor = temArray[i];
                   }
               }return mayor;
          },
          numMenor: function() {
               for(i = 0; i < temArray.length; i++){
                    if (temArray[i] > mayor)
                    {
                        mayor = temArray[i];
                    }
               }
               menor = mayor;
               for(i = 0; i < temArray.length; i++){
                    if (temArray[i] < menor)
                    {
                         menor = temArray[i];
                    }
               }return menor;
          },
          varianza: function() {
               var x=0;
               var sumaT = 0;
               for(let iv = 0; iv < temArray.length; iv++) {
                    tem = temArray[iv];
                    x++; 
                    sumaT += Math.pow((x - tem),2);
               } 
               vari = (sumaT/temArray.length);
               return vari;
          },
     };
}
// https://es.stackoverflow.com/questions/81737/c%C3%B3mo-puedo-mostrar-los-datos-de-unos-arreglo-de-javascript-en-una-tabla-de-boot
function calcular(){
     const resultados = document.getElementById('resultados');
     let temperatura = document.getElementById('temperatura').value;

     if(isNaN(temperatura)) {
          alert('Ingrese un valor valido');
          resultados.style.display = 'none';
     } else {
          let j = 0;
          j++;
          resultados.style.display = 'block';
          temperatura = new Number(temperatura);
          const objTemp = tempFun(temperatura);
          document.getElementById('funArTemp').innerHTML = `Arreglo ${objTemp.funArTemp()}`;
          document.getElementById('funPromedio').innerHTML = `Promedio ${objTemp.funPromedio()}`;
          document.getElementById('numMayor').innerHTML = `Temperatura mayor ${objTemp.numMayor()}`;
          document.getElementById('numMenor').innerHTML = `Temperatura menor ${objTemp.numMenor()}`;
          document.getElementById('varianza').innerHTML = `Varianza ${objTemp.varianza()}`;
     }

}