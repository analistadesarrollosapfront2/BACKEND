const usuariosDao = require('../Dao/usuariosDao');
const usuariosAppservice = require('../appService/usuariosAppservice');

class loginAministradorController {
  async get(req, res) {

    try {
      
      const usuario = req.body;
      // console.log(usuario);
      const result = await usuariosAppservice.buscarUsuarioPorCorreo(usuario);
      res.status(201).json(result);

    } catch (error) {
      console.error('Error executing query:', error);
      res.status(500).send('Error al consultar el usuario');
    }
    
  }
}
module.exports = new loginAministradorController();
