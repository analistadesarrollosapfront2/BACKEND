// const dbController = require('../../../../DBController');
const usuariosAppservice = require('../appService/usuariosAppservice');
class loginController {
  async post(req, res) {
    
    const usuario = req.body;
    const result = await usuariosAppservice.buscarUsuarioPorCorreo(usuario);
    res.status(201).json(result);
    
    try {
       
    } catch (error) {
      console.error('Error executing query:', error);
      res.status(500).send('Error executing query');
    }
  }
}
module.exports = new loginController();
