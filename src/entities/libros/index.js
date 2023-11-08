const express = require('express');
const router = express.Router();
const InsertarLibrosController = require('./Controllers/insertarLibrosController');
const librosController = require('./Controllers/librosController');
const RecuperarLibrosController = require('./Controllers/recuperarLibrosController');
const editarLibrosController = require('./Controllers/editarLibrosController');
const eliminarLibrosController = require('./Controllers/eliminarLibrosController');
const ViewLibrosController = require('./Controllers/viewLibrosController');

  router.post('/', async (req, res) => {
    try {
      // console.log("Vammos a insertar");
      await InsertarLibrosController.post(req, res);
    } catch (error) {
      console.error('Error in route handler:', error);
      res.status(500).send('Internal Server Error');
    }
  });

  router.post('/view', async (req, res) => {
    try {
      
      await ViewLibrosController.post(req, res);
    } catch (error) {
      console.error('Error in route handler:', error);
      res.status(500).send('Internal Server Error');
    }
  });
  

  router.get('/recuperar', async (req, res) => {
    try {
      console.log("Vamos a recuperar");
      await RecuperarLibrosController.get(req, res);
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

router.post('/eliminar', async (req, res) => {
    try {
      // console.log("Vamos a eliminar ");
      // console.log(req.body);
      await eliminarLibrosController.post(req, res);
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
