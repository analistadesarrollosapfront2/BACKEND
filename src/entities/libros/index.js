const express = require('express');
const router = express.Router();
const librosController = require('./Controllers/librosController');

console.log("INDEX DE LIBROS");
router.get('/', librosController.getAll);

module.exports = router;
