const express = require('express');
const router = express.Router();
const loginController = require('./Controllers/loginController');
const insertarController = require('./Controllers/insertarController');
const loginAministradorController = require('./Controllers/loginAdministradorController');
const loginVendedorController = require('./Controllers/loginVendedorController');
const loginClienteController = require('./Controllers/loginClienteController');

console.log("ACCEDIENDO AL INDEX DE LOGIN");
  //LOGIN NORMAL
  router.post('/', async (req, res) => {
    try {
      await loginController.post(req, res);
    } catch (error) {
      console.error('Error in route handler:', error);
      res.status(500).send('Internal Server Error');
    }
  });
  //INSERTAR USUARIOS
  router.post('/insertar', async (req, res) => {
    try {
      await insertarController.post(req, res);
    } catch (error) {
      console.error('Error in route handler:', error);
      res.status(500).send('Internal Server Error');
    }
  });
  //ACTUALIZAR USUARIOS
  router.post('/actualizar', async (req, res) => {
    try {
      await insertarController.put(req, res);
    } catch (error) {
      console.error('Error in route handler:', error);
      res.status(500).send('Internal Server Error');
    }
  });
  //AUTENTICAR ADMINISTRADOR
  router.get('/administrador', async (req, res) => {
    try {
      await loginAministradorController.get(req, res);
    } catch (error) {
      console.error('Error in route handler:', error);
      res.status(500).send('Internal Server Error');
    }
  });
  //AUTENTICAR VENDEDOR
  router.get('/vendedor', async (req, res) => {
    try {
      await loginVendedorController.get(req, res);
    } catch (error) {
      console.error('Error in route handler:', error);
      res.status(500).send('Internal Server Error');
    }
  });
  //AUTENTICAR CLIENTE
  router.get('/cliente', async (req, res) => {
    try {
      await loginClienteController.get(req, res);
    } catch (error) {
      console.error('Error in route handler:', error);
      res.status(500).send('Internal Server Error');
    }
  });

module.exports = router;
