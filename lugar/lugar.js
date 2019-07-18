const axios = require('axios');

const getLugarLatLng = async(dir) => {

    const encodeUrl = encodeURI(dir);


    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: { 'X-RapidAPI-Key': '99f34dfc59mshd3ea743065382d6p1b048cjsn4485a0b637c6' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultads para ${dir}`)
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    /*  instance.get()
     .then(resp => {
             console.log(resp.data.Results[0]);
         })
         .catch(err => {
             console.log('ERROR!!!!', err);
         }) */
    return {
        direccion,
        lat,
        lng
    }

}

module.exports = {
    getLugarLatLng
}