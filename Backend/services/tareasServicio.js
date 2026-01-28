const Tarea = require('../models/Tarea');

const servicioTareas = {
    obtenerTodas: async () => await Tarea.find().sort({ fecha: -1 }),

    crear: async (datosTarea) => {
        const nuevaTarea = new Tarea(datosTarea);
        return await nuevaTarea.save();
    },

    actualizar: async (id, datosActualizados) => {
        return await Tarea.findByIdAndUpdate(id, datosActualizados, { new: true });
    },

    eliminar: async (id) => {
        return await Tarea.findByIdAndDelete(id);
    }
};

module.exports = servicioTareas;
