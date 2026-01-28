require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors()); 
app.use(express.json()); 

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;


mongoose.connect(MONGO_URI)
    .then(() => console.log(' Conectado a MongoDB Atlas con éxito'))
    .catch(err => console.error(' Error de conexión a la base de datos:', err));


app.get('/', (req, res) => {
    res.send('API de DevTask Tracker funcionando ');
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
