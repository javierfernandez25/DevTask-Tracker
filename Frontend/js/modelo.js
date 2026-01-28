const ModeloTareas = {
    urlBase: 'http://localhost:3000/api/tasks',

    obtenerTareas: async () => {
        try {
            const respuesta = await fetch(ModeloTareas.urlBase);
            return await respuesta.json();
        } catch (error) {
            console.error('Error al obtener tareas:', error);
            return [];
        }
    },

    crearTarea: async (datosTarea) => {
        try {
            const respuesta = await fetch(ModeloTareas.urlBase, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(datosTarea)
            });
            return await respuesta.json();
        } catch (error) {
            console.error('Error al crear tarea:', error);
        }
    },

    eliminarTarea: async (id) => {
        try {
            const respuesta = await fetch(`${ModeloTareas.urlBase}/${id}`, {
                method: 'DELETE'
            });
            return await respuesta.json();
        } catch (error) {
            console.error('Error al eliminar tarea:', error);
        }
    },

    actualizarTarea: async (id, datosActualizados) => {
        try {
            const respuesta = await fetch(`${ModeloTareas.urlBase}/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(datosActualizados)
            });
            return await respuesta.json();
        } catch (error) {
            console.error('Error al actualizar tarea:', error);
        }
    }
};

