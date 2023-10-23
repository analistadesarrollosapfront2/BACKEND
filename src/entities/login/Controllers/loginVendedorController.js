const usuariosDao = require('../Dao/usuariosDao');
class loginVendedorController {
  async get(req, res) {
    
    try {
      
      const usuario = req.body;
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

          if(result.data.user_type !== 3){
            res.status(200).json(
              {
                status: 0,
                message: "Este usuario no es vendedor"
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
module.exports = new loginVendedorController();
