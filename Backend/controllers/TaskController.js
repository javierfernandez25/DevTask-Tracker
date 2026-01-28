const taskService = require('../services/TaskService');

// Obtener todas las tareas (GET)
exports.getTasks = async (req, res) => {
    try {
        const tasks = await taskService.getAll();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener tareas', error: error.message });
    }
};

// Crear una nueva tarea (POST)
exports.createTask = async (req, res) => {
    try {
        // Pasamos el cuerpo de la petición al servicio
        const newTask = await taskService.create(req.body);
        res.status(201).json(newTask);
    } catch (error) {
        // Si falla la validación del esquema de Mongoose, devolvemos 400
        res.status(400).json({ message: 'Error al crear la tarea', error: error.message });
    }
};

// Actualizar una tarea (PUT)
exports.updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedTask = await taskService.update(id, req.body);

        if (!updatedTask) {
            return res.status(404).json({ message: 'Tarea no encontrada' });
        }

        res.status(200).json(updatedTask);
    } catch (error) {
        res.status(400).json({ message: 'Error al actualizar', error: error.message });
    }
};

// Eliminar una tarea (DELETE)
exports.deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedTask = await taskService.delete(id);

        if (!deletedTask) {
            return res.status(404).json({ message: 'No se pudo eliminar: Tarea no encontrada' });
        }

        res.status(200).json({ message: 'Tarea eliminada correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar', error: error.message });
    }
};