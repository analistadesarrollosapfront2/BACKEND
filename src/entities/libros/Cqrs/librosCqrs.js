const librosDao = require('../Dao/librosDao');
const LibroViewModel = require('../ViewModel/LibroViewModel');

class librosCqrs {

    async insertarLibros(libro) {
    
        try {
            // console.log("DESDE CQRS");
            let resultValidar = await librosDao.validarLibro(libro);
            if( resultValidar !== 0 ) return {status:-1, message: "Libro existente"};
            let resultInsert = await librosDao.insertarLibro(libro);
            if ( resultInsert === 1 ) return {status:1, message: "Libro registrado con exito"};

        } catch (error) {
            console.error('Error executing query:', error);
            return error;
        }
    }

    async actualizarLibros(libro) {
    
        try {
 
            let resultInsert = await librosDao.actualizarLibro(libro);
            if ( resultInsert === 1 ) return {status:1, message: "Libro actualizado con exito"};
            return resultInsert;
        } catch (error) {
            console.error('Error executing query:', error);
            return error;
        }
    }

    async eliminarLibros(libro) {
    
        try {
 
            let resultInsert = await librosDao.eliminarLibro(libro);
            if ( resultInsert === 1 ) return {status:1, message: "Libro eliminado con exito"};
            return resultInsert;
        } catch (error) {
            console.error('Error executing query:', error);
            return error;
        }
    }

    async vistaLibros(libro) {
    
        try {
 
            let resultSelect = await librosDao.viewLibro(libro);
            let resultViewModel = new LibroViewModel.constructor(resultSelect.id, resultSelect.title, resultSelect.editorial);
            return {
                id: resultViewModel[0],
                name: resultViewModel[1],
                editorial: resultViewModel[2]
            };
            
        } catch (error) {
            console.error('Error executing query:', error);
            return error;
        }
    }


}
module.exports = new librosCqrs();
