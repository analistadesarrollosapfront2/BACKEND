const usuariosCqrs = require('../Cqrs/usuariosCqrs');
const emailService = require('../appService/emailService');

class usuariosAppservice {
    async registroUsuario(usuario) {
  
      try {
    
        const resultInsert = await usuariosCqrs.insertarTiposDeUSuario(usuario);

          return resultInsert;
  
        } catch (error) {
          console.error('Error executing query:', error);
          res.status(500).send('Error al insertar usuario');
        }      
    }

    async actualizarUsuario(usuario) {
  
      try {
    
        const resultaActualizar = await usuariosCqrs.actualizarTiposDeUSuario(usuario);        

          return resultaActualizar;
  
        } catch (error) {
          console.error('Error executing query:', error);
          res.status(500).send('Error al insertar usuario');
        }      
    }
    //pendiente
    async recuperarContrasenia(email) {
  
        try {
      
            // const usuario = req.query;
            const result = await usuariosDao.buscarPorCorreo(email);
            
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
      
                if(result.data.user_type !== 2){
                  res.status(200).json(
                    {
                      status: 0,
                      message: "Este usuario no es cliente"
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
    //pendiente
    async restablecerContrasenia(email) {
  
    const result = await usuariosCqrs.restablecerContrasenia(usuario);

  }
 }
module.exports = new usuariosAppservice();
