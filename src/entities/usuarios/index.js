const express = require('express');
const router = express.Router();
const librosController = require('./Controllers/loginController');

// console.log("INDEX DE LOGIN");
router.get('/', librosController.getAll);

module.exports = router;
