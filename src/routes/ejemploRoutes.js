const express = require('express');
const router = express.Router();
const Ejemplo = require('../models/ejemploModel'); // Importa el modelo (opcional)

// Ruta para obtener todos los elementos
router.get('/elementos', (req, res) => {
  Ejemplo.getAll((err, data) => {
    if (err) {
      res.status(500).json({ message: err.message });
      return;
    }
    res.json(data);
  });
});

module.exports = router;
