const express = require('express');
const router = express.Router();
const InsertarLibrosController = require('./Controllers/insertarLibrosController');
const librosController = require('./Controllers/librosController');
const editarLibrosController = require('./Controllers/editarLibrosController');
const eliminarLibrosController = require('./Controllers/eliminarLibrosController');

router.post('/', async (req, res) => {
    try {
      await InsertarLibrosController.post(req, res);
    } catch (error) {
      console.error('Error in route handler:', error);
      res.status(500).send('Internal Server Error');
    }
  });

router.post('/editar', async (req, res) => {
    try {
      await editarLibrosController.post(req, res);
    } catch (error) {
      console.error('Error in route handler:', error);
      res.status(500).send('Internal Server Error');
    }
  });

router.delete('/', async (req, res) => {
    try {
      await eliminarLibrosController.delete(req, res);
    } catch (error) {
      console.error('Error in route handler:', error);
      res.status(500).send('Internal Server Error');
    }
  });

router.get('/', async (req, res) => {
    try {
      await librosController.get(req, res);
    } catch (error) {
      console.error('Error in route handler:', error);
      res.status(500).send('Internal Server Error');
    }
  });

module.exports = router;
