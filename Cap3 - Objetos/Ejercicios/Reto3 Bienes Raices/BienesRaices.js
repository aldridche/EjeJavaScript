//` Volumen de inmuebles=   V= (4/3) * Pi * (r*r*r)
let inmuebles  = {  
    geo: 'Americas',
    disponibles:[
        clavePropiedad={
            id:1, superficieTotal: 1500, caracteristicas: 'un piso', 
            ubicacionGeo: { zona: 'Ecatepec', calle: '5 de febrero', num: '2', cP: '55995'},
            precio: 12478, 
            disponible: 'r',
        },
        clavePropiedad={
            id:2,superficieTotal: 2000, caracteristicas:'2 pisos', 
            ubicacionGeo: { zona: 'Temascalapa', calle: 'hidalgo', numero: '3', cP:'55994'},
            precio: 10000, 
            disponible: 'r',
        },
        clavePropiedad={
            id:3, superficieTotal: 1500, caracteristicas: 'un piso', 
            ubicacionGeo: { zona: 'Ecatepec', calle: '5 de febrero', num: '2', cP: '55995'},
            precio: 12478, 
            disponible: 'v',
        },
        clavePropiedad={
            id:4,superficieTotal: 2000, caracteristicas:'2 pisos', 
            ubicacionGeo: { zona: 'Temascalapa', calle: 'hidalgo', numero: '3', cP:'55994'},
            precio: 10000, 
            disponible: 'r',
        },
    ],
    propiedadPrecio: function (){
        //console.log(this.disponibles[1]);     console.log(this.disponibles[1].precio);    console.log(this.disponibles[1].disponible);
        console.log(`Disponibles de 500,000 a 2.8 M de dolares`);
        for(var i = 0; i < this.disponibles.length; i++){
            if ( this.disponibles[i].disponible == 'v'){
                console.log(`Clave ${this.disponibles[i].id}`);
            }
        }
    },
    dispoRenta: function(geografico){
        
        for(var i = 0; i < this.disponibles.length; i++){
            if ( this.disponibles[i].ubicacionGeo.zona == geografico && this.disponibles[i].disponible == 'r'){
                    console.log(`Clave disponible de renta ${this.disponibles[i].id}`);
            }
        }
    },
};

inmuebles.propiedadPrecio();
inmuebles.dispoRenta('Ecatepec');
