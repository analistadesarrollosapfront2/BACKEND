const librosCqrs = require('../Cqrs/librosCqrs');
const librosDao = require('../Dao/librosDao');
const LibroViewModel = require('../ViewModel/LibroViewModel');
class librosAppService {

    async registrarLibros(libro) {
      
        try {
         
            const resultInsert = await librosCqrs.insertarLibros(libro);
            return resultInsert;
    
        } catch (error) {
          console.error('Error executing query:', error);
          res.status(500).send('Error al insertar el libro');
        }      
    }

    async actualizarLibros(libro) {
      
        try {
           
            const resultUpdate = await librosCqrs.actualizarLibros(libro);
            return resultUpdate;
    
        } catch (error) {
          console.error('Error executing query:', error);
          res.status(500).send('Error al actualizar el libro');
        }      
    }

    async eliminarLibros(libro) {
      
        try {
           
            const resultDelete = await librosCqrs.eliminarLibros(libro);
            return resultDelete;
    
        } catch (error) {
          console.error('Error executing query:', error);
          res.status(500).send('Error al eliminar el libro');
        }      
    }

    async vistaLibros(libro) {
      
        try {
    
            let resultSelect = await librosDao.viewLibro(libro);
            let resultViewModel = new LibroViewModel.constructor(resultSelect.id, resultSelect.title, resultSelect.editorial);
            console.log("DESDE APPSERVICE");
            return {
                identificador: resultViewModel[0],
                name: resultViewModel[1],
                edit: resultViewModel[2]
            };
    
        } catch (error) {
          console.error('Error executing query:', error);
          res.status(500).send('Error al modificar la visa');
        }      
    }

 }
module.exports = new librosAppService();
