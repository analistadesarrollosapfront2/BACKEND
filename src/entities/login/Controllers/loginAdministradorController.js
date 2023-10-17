const usuariosDao = require('../Dao/usuariosDao');

class loginAministradorController {
  async get(req, res) {

    try {

      const usuario = req.body.usuario;
      const result = await usuariosDao.buscarPorCorreo(usuario);
      
    } catch (error) {
      console.error('Error executing query:', error);
      res.status(500).send('Error executing query');
    }
    
  }
}
module.exports = new loginAministradorController();
