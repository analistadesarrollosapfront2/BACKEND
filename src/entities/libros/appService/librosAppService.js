const librosCqrs = require('../Cqrs/librosCqrs');
// const usuariosDao = require('../Dao/usuariosDao');
// const UsuarioPublicViewModel = require('../ViewModels/UsuarioPublicViewModel');

class librosAppService {

    async registrarLibros(libro) {
      
        try {
         
            const resultInsert = await librosCqrs.insertarLibros(libro);
            return resultInsert;
    
        } catch (error) {
          console.error('Error executing query:', error);
          res.status(500).send('Error al insertar usuario');
        }      
    }

    async actualizarLibros(libro) {
      
        try {
           
            const resultUpdate = await librosCqrs.actualizarLibros(libro);
            return resultUpdate;
    
        } catch (error) {
          console.error('Error executing query:', error);
          res.status(500).send('Error al insertar usuario');
        }      
    }

    async eliminarLibros(libro) {
      
        try {
           
            const resultDelete = await librosCqrs.eliminarLibros(libro);
            return resultDelete;
    
        } catch (error) {
          console.error('Error executing query:', error);
          res.status(500).send('Error al insertar usuario');
        }      
    }

 }
module.exports = new librosAppService();
