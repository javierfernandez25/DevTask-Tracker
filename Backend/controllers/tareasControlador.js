const servicioTareas = require('../services/tareasServicio');

// Obtener todas las tareas (GET)
exports.obtenerTareas = async (req, res) => {
    try {
        const tareas = await servicioTareas.obtenerTodas();
        res.status(200).json(tareas);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener tareas', error: error.message });
    }
};

// Crear una nueva tarea (POST)
exports.crearTarea = async (req, res) => {
    try {
        const nuevaTarea = await servicioTareas.crear(req.body);
        res.status(201).json(nuevaTarea);
    } catch (error) {
        res.status(400).json({ message: 'Error al crear la tarea', error: error.message });
    }
};

// Actualizar una tarea (PUT)
exports.actualizarTarea = async (req, res) => {
    try {
        const { id } = req.params;
        const tareaActualizada = await servicioTareas.actualizar(id, req.body);

        if (!tareaActualizada) {
            return res.status(404).json({ message: 'Tarea no encontrada' });
        }

        res.status(200).json(tareaActualizada);
    } catch (error) {
        res.status(400).json({ message: 'Error al actualizar', error: error.message });
    }
};

// Eliminar una tarea (DELETE)
exports.eliminarTarea = async (req, res) => {
    try {
        const { id } = req.params;
        const tareaEliminada = await servicioTareas.eliminar(id);

        if (!tareaEliminada) {
            return res.status(404).json({ message: 'No se pudo eliminar: Tarea no encontrada' });
        }

        res.status(200).json({ message: 'Tarea eliminada correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar', error: error.message });
    }
};
