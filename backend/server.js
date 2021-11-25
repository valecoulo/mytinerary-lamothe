const express = require('express');

const cities = ['Buenos Aires, Bogota, New York, Conecticut, London'];

const app = express();

const cors = require('cors');


app.use(cors());

const hey = 'ANASHEIIII'

app.get('/pruebas/datos', (req, res) => {
    console.log(`me llego esto : ${hey}`)
    res.send(hey)
})

app.get('/api/cities', (req, res) => {
    res.json({response: {cities}})
})



app.listen(4000, () => console.log("corriendo en el puerto 4000"));
