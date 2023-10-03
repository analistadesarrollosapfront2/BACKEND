const express = require('express');
const router = express.Router();
const InsertarUniversidadesController = require('./Controllers/insertarUniversidadesController');
const UniversidadesController = require('./Controllers/UniversidadesController');
const editarUniversidadesController = require('./Controllers/editarUniversidadesController');
const eliminarUniversidadesController = require('./Controllers/eliminarUniversidadesController');

// console.log("INDEX DE UNIVERSIDADES");
router.post('/', async (req, res) => {
    try {
      await InsertarUniversidadesController.post(req, res);
    } catch (error) {
      console.error('Error in route handler:', error);
      res.status(500).send('Internal Server Error');
    }
  });

router.post('/editar', async (req, res) => {
    try {
      await editarUniversidadesController.post(req, res);
    } catch (error) {
      console.error('Error in route handler:', error);
      res.status(500).send('Internal Server Error');
    }
  });

router.post('/eliminar', async (req, res) => {
    try {
      // console.log("Vamos a eliminar ");
      // console.log(req.body);
      await eliminarUniversidadesController.post(req, res);
    } catch (error) {
      console.error('Error in route handler:', error);
      res.status(500).send('Internal Server Error');
    }
  });

router.get('/', async (req, res) => {
    try {
      await UniversidadesController.get(req, res);
    } catch (error) {
      console.error('Error in route handler:', error);
      res.status(500).send('Internal Server Error');
    }
  });

module.exports = router;
