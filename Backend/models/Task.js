const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
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
        enum: ['pending', 'done'],
        default: 'pending'
    },
    fecha: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Task', taskSchema);