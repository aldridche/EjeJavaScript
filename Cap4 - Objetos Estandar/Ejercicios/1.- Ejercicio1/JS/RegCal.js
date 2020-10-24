let promedioRes;
let i=0;
let arrCal = [];
let suma = 0;
let regCal = (calificacion) => {
    let opCal = calificacion;

    return {
        clasificacion: function() {
            if(opCal >= 0 && opCal <= 3.99){
                const b1 = [];
                const MenorA4 = b1.push(opCal);
                let rango = `Entre 0 y 4 ${opCal}`;
                return rango;
            }
            else if(opCal >= 4 && opCal <= 5.99){
                const b2 = [];
                let rango = `Entre 4 y 6 ${opCal}`;
                return rango;
            }
            else if(opCal >= 6 && opCal <= 7.99){
                const b3 = [];
                const MenorA8 = b3.push(opCal);
                let rango = `Entre 6 y 8 ${opCal}`;
                return rango;
            }
            else if(opCal >= 8 && opCal <= 8.99){
                const b4 = [];
                const MenorA9 = b4.push(opCal);
                let rango = `Entre 8 y 9 ${opCal}`;
                return rango;
            }
            else if(opCal >= 9 && opCal <= 10){
                const b5 = [];
                const MenorA10 = b5.push(opCal);
                let rango = `Entre 9 y 10 ${opCal}`;
                return rango;
            } else {return alert('Error');}

        },

        promedio: function() {    
            let posicion;
            posicion = arrCal.push(opCal);
            for(let cont = 0; cont < arrCal.length; cont++) {
                let numero =arrCal[cont];
                suma += numero;
            }
            
            promedioRes = (suma)/arrCal.length;
            console.log(promedioRes);
            suma = 0;
            return promedioRes;
        },

    };
};

function calcular() {
    const promediosFinales = document.getElementById('promediosFinales');
    let calificacion = document.getElementById('calificacion').value;

    if(isNaN(calificacion)){
        alert('Ingrese un valor numerico')
        promediosFinales.style.display = 'none';
    } else if(calificacion < 0 || calificacion >10){
        alert('Ingrese un valor entre 0 y 9')
        promediosFinales.style.display = 'none';
    }
    else {
        let j = 0;
        j++;
        promediosFinales.style.display = 'block';
        calificacion = new Number(calificacion);
        const obgCalificacion = regCal(calificacion);
        document.getElementById(
            'clasificacion'  
        ).innerHTML = `Calificacion ${obgCalificacion.clasificacion()}<br>`;
        document.getElementById(
            'promedio'
        ).innerHTML = `El promedio es ${obgCalificacion.promedio()}`;
    }
}