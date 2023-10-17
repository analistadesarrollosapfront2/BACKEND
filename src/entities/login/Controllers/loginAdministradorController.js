const usuariosDao = require('../Dao/usuariosDao');

class loginAministradorController {
  async get(req, res) {
    
    //console.log(req.body);
    let string = req.body.string;
    usuariosDao.dao(string);
    
  }
}
module.exports = new loginAministradorController();
