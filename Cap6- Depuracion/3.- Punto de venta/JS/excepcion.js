const vender = (cantidad, existencia) => {
    if (cantidad > existencia){
        const error = {
            name: 'Error Existencia',
            message: 'La cantidad solicidada excede la existencia'
        }
        throw error;    // retorna valores que pueden ser interpretados como un error.
    } else {
        existencia -= cantidad;
        return existencia;
    }
}

try { // funciones que se intentan ejecutar
    const existenciaTotal = vender(15, 10);
    console.log(existenciaTotal);
}
catch (error) {
    console.log(`${error.name}: ${error.message}`);
}