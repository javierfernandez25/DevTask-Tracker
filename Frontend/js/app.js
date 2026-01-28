document.addEventListener('DOMContentLoaded', async () => {
    // Carga inicial de tareas
    const cargarTareas = async () => {
        const tareas = await ModeloTareas.obtenerTareas();
        VistaTareas.renderizarTareas(tareas);
    };

    // Manejar envío del formulario
    VistaTareas.elementos.formulario.addEventListener('submit', async (e) => {
        e.preventDefault();
        const datos = VistaTareas.obtenerDatosFormulario();

        const nuevaTarea = await ModeloTareas.crearTarea(datos);
        if (nuevaTarea) {
            VistaTareas.limpiarFormulario();
            await cargarTareas();
        }
    });

    // Función global para eliminar (llamada desde el HTML dinámico)
    window.controladorEliminar = async (id, titulo, tecnologia, fechaFin) => {
        if (confirm(`¿Estás seguro de eliminar la tarea: ${titulo}?`)) {
            const resultado = await ModeloTareas.eliminarTarea(id);
            if (resultado) {
                VistaTareas.añadirAlBacklog(titulo, tecnologia, fechaFin);
                await cargarTareas();
            }
        }
    };


    // Función global para cambiar estado
    window.controladorCambiarEstado = async (id, nuevoEstado) => {
        const resultado = await ModeloTareas.actualizarTarea(id, { estado: nuevoEstado });
        if (resultado) {
            await cargarTareas();
        }
    };

    cargarTareas();
});

