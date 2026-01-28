require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const rutasTareas = require('./routes/tareasRutas');

const app = express();

app.use(cors());
app.use(express.json());

const PUERTO = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
    .then(() => console.log(' [DB] Conectado a MongoDB Atlas con éxito'))
    .catch(err => console.error(' [ERROR] Error de conexión a la base de datos:', err));

// Rutas
app.use('/api/tasks', rutasTareas);

app.get('/', (req, res) => {
    res.send('API de DevTask Tracker funcionando correctamente');
});

app.listen(PUERTO, () => {
    console.log(` [API] Servidor escuchando en http://localhost:${PUERTO}`);
});

