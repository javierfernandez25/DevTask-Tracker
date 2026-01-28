const express = require('express');
const router = express.Router();
const controladorTareas = require('../controllers/tareasControlador');

router.get('/', controladorTareas.obtenerTareas);
router.post('/', controladorTareas.crearTarea);
router.put('/:id', controladorTareas.actualizarTarea);
router.delete('/:id', controladorTareas.eliminarTarea);

module.exports = router;
