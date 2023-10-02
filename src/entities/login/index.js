const express = require('express');
const router = express.Router();
const loginController = require('./Controllers/loginController');

console.log("INDEX DE LOGIN");
// router.get('/', loginController.getAll);
router.get('/', async (req, res) => {
    try {
      // console.log(req.body);
      await loginController.getAll(req, res);
    } catch (error) {
      console.error('Error in route handler:', error);
      res.status(500).send('Internal Server Error');
    }
  });

module.exports = router;
