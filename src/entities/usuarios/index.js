const express = require('express');
const router = express.Router();
const usuariosController = require('./controllers/usuariosController');
console.log("INDEX DE USUARIOS");
router.get('/', usuariosController.getAll);
// router.get('/detalles', usuariosController.getDetalles);
// router.post('/', usuariosController.create);

module.exports = router;
