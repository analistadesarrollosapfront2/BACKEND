const usuariosDao = require('../Dao/usuariosDao');

class loginAministradorController {
  async get(req, res) {

    try {
      
      const usuario = req.query;
      console.log(usuario);
      const result = await usuariosDao.buscarPorCorreo(usuario);
      
      if(result.status === -1){
        
        res.status(201).json(result);

      }else{

        if(result.data.status === 0){
          res.status(200).json(
            {
              status: 0,
              message: "Usuario inactivo"
            }
          );    
        }else{

          if(result.data.user_type !== 1){
            res.status(200).json(
              {
                status: 0,
                message: "Este usuario no es administrador"
              }
            );    
          }else{

            res.status(200).json(result);

          }
        } 
        
      }

    } catch (error) {
      console.error('Error executing query:', error);
      res.status(500).send('Error al consultar el usuario');
    }
    
  }
}
module.exports = new loginAministradorController();
