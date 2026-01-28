const mongoose = require('mongoose');

const esquemaTarea = new mongoose.Schema({
    titulo: {
        type: String,
        required: [true, 'El título es obligatorio'],
        trim: true
    },
    descripcion: {
        type: String,
        trim: true
    },
    tecnologia: {
        type: String,
        enum: ['Java', 'JS', 'Python', 'HTML/CSS', 'Node.js', 'PHP'],
        default: 'JS'
    },
    estado: {
        type: String,
        enum: ['pendiente', 'completada'],
        default: 'pendiente'
    },
    fecha: {
        type: Date,
        default: Date.now
    },
    fechaFin: {
        type: Date
    }
});


module.exports = mongoose.model('Tarea', esquemaTarea);
