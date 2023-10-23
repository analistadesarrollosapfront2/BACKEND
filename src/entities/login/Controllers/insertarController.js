const usuariosCqrs = require('../Cqrs/usuariosCqrs');

class insertarController {
  async post(req, res) {
    try {
      
        const usuario = req.body;
        const result = await usuariosCqrs.insertarCliente(usuario);
        if(result.status === 0){
        
            res.status(201).json(result);
    
        }else{  
            res.status(200).json(result);
        }

      } catch (error) {
        console.error('Error executing query:', error);
        res.status(500).send('Error al insertar usuario');
      }
  }
}
module.exports = new insertarController();
