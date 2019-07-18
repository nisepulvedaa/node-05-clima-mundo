const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;



const getInfo = async(direccion) => {

    try {
        let place = await lugar.getLugarLatLng(direccion);
        let weather = await clima.getClima(place.lat, place.lng);
        return `la ciudad de : ${place.direccion}  tiene un clima de   ${weather}  Grados C`;
    } catch (er) {
        return `No se puede Mostrar el clima para ${direccion}`;
    }



}



/* 
lugar.getLugarLatLng(argv.direccion)
    .then(console.log) */

/* clima.getClima(40.750000, -74.000000)
    .then(console.log)
    .catch(console.log); */

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);