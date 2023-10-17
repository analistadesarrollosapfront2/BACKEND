const express = require('express');
const router = express.Router();
const usuariosController = require('./Controllers/usuariosController');

// console.log("INDEX DE LOGIN");
router.get('/', usuariosController.get);

module.exports = router;
