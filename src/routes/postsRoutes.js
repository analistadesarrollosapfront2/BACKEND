// En el archivo de rutas
const express = require('express');
const router = express.Router();
const postsController = require('../controllers/postsController');

// Ruta para obtener todas las publicaciones
router.get('/posts', postsController.getAllPosts);

module.exports = router;

