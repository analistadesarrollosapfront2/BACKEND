const express = require('express');
const router = express.Router();
const loginController = require('./Controllers/loginController');
const loginAministradorController = require('./Controllers/loginAdministradorController');
const loginVendedorController = require('./Controllers/loginVendedorController');
const loginClienteController = require('./Controllers/loginClienteController');

console.log("ACCEDIENDO AL INDEX DE LOGIN");
router.post('/', async (req, res) => {
    try {
      // console.log(req.body);
      await loginController.post(req, res);
    } catch (error) {
      console.error('Error in route handler:', error);
      res.status(500).send('Internal Server Error');
    }
  });

  router.get('/administrador', async (req, res) => {
    try {
      await loginAministradorController.get(req, res);
    } catch (error) {
      console.error('Error in route handler:', error);
      res.status(500).send('Internal Server Error');
    }
  });

  router.get('/vendedor', async (req, res) => {
    try {
      await loginVendedorController.get(req, res);
    } catch (error) {
      console.error('Error in route handler:', error);
      res.status(500).send('Internal Server Error');
    }
  });

  router.get('/cliente', async (req, res) => {
    try {
      await loginClienteController.get(req, res);
    } catch (error) {
      console.error('Error in route handler:', error);
      res.status(500).send('Internal Server Error');
    }
  });

module.exports = router;
