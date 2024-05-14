var express = require('express');
var app = express();
const port = 8000;
const hostname = '127.0.0.1';

app.get('/', (req, res) => {
    res.status(200).send('Hola usuario humano que tal? Probando ');
});

app.get('/otroGet', (req, res) => {
    res.status(200).send('Que te trae por aqui?')
});

app.post('/otraRuta', (req, res) => {
    res.status(200)
    res.send({
        "name" : "IPN",
        "favoriteNumber" : "IPN",
        "isProgrammer" : "IPN"
    });
});

app.post('/jsonAleatorio', (req, res) => {
    res.status(200)
    const randomObject = {
        numero: Math.floor(Math.random() * 100),
        cadena: Math.random().toString(36).substring(7),
        booleano: Math.random() < 0.5
    };
    res.json(randomObject);
});


app.listen(port, hostname, () => {
    console.log(`Servidor corriendo en http://${hostname}:${port}`);
});

