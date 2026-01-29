const VistaTareas = {
    elementos: {
        formulario: document.getElementById('formulario-tarea'),
        inputTitulo: document.getElementById('titulo'),
        inputDesc: document.getElementById('descripcion'),
        inputTecnologia: document.getElementById('tecnologia'),
        inputEstado: document.getElementById('estado'),
        inputFechaFin: document.getElementById('fechaFin'),
        listaTareas: document.getElementById('lista-tareas')
    },

    obtenerDatosFormulario: () => ({
        titulo: VistaTareas.elementos.inputTitulo.value,
        descripcion: VistaTareas.elementos.inputDesc.value,
        tecnologia: VistaTareas.elementos.inputTecnologia.value,
        estado: VistaTareas.elementos.inputEstado.value,
        fechaFin: VistaTareas.elementos.inputFechaFin.value
    }),


    limpiarFormulario: () => {
        VistaTareas.elementos.formulario.reset();
    },

    renderizarTareas: (tareas) => {
        VistaTareas.elementos.listaTareas.innerHTML = '';
        tareas.forEach(tarea => {
            const html = VistaTareas.crearHTMLTarea(tarea);
            VistaTareas.elementos.listaTareas.insertAdjacentHTML('beforeend', html);
        });
    },

    crearHTMLTarea: (tarea) => {
        const esCompletada = tarea.estado === 'completada';
        const textoBoton = esCompletada ? 'Reabrir' : 'Hecho';
        const claseBoton = esCompletada ? 'btn-reopen' : 'btn-complete';
        const nuevoEstado = esCompletada ? 'pendiente' : 'completada';

        return `
            <div class="task-item" id="tarea-${tarea._id}">
                <div class="task-cell task-title-cell">
                    <span class="task-title-text">${tarea.titulo}</span>
                    ${tarea.descripcion ? `<span class="task-desc-text">${tarea.descripcion}</span>` : ''}
                </div>
                <div class="task-cell"><span class="badge badge-tech">${tarea.tecnologia}</span></div>
                <div class="task-cell"><span class="badge badge-${tarea.estado}">${tarea.estado}</span></div>
                <div class="task-cell"><span class="task-date">${tarea.fechaFin ? new Date(tarea.fechaFin).toLocaleDateString() : '-'}</span></div>
                <div class="task-cell task-actions">
                    <button class="btn-action ${claseBoton}" onclick="controladorCambiarEstado('${tarea._id}', '${nuevoEstado}')">${textoBoton}</button>
                    <button class="btn-action btn-delete" onclick="controladorEliminar('${tarea._id}', '${tarea.titulo}', '${tarea.tecnologia}', '${tarea.fechaFin || ''}')">X</button>
                </div>
            </div>
        `;
    },
};
