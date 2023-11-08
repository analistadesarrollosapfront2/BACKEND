const dbController = require('../../../../DBController');

class librosDao {

    async validarLibro(libro) {
        // console.log("LIBRO EN EL DAO");
        const { title } = libro;
        const sql = `
        SELECT * FROM libreriautl.libros WHERE title = ?;
        `;
        const values = [title];

        try {
           
        const result = await dbController.executeQuery(sql, values);
        return result.length;
        
        } catch (error) {
        console.error('Error al validar el libro:', error);
        return { status: -1, message: 'Error al validar el libro' }
        }
    }

    async insertarLibro(libro) {
        // console.log("LIBRO EN EL DAO");
        const { title, language, genre, editorial, status, file } = libro;
        const sql = `
        INSERT INTO libreriautl.libros (title, language, genre, editorial, status, file)
        VALUES (?, ?, ?, ?, ?, ?)
        `;
        const values = [title, language, genre, editorial, status, file];

        try {
        const result = await dbController.executeQuery(sql, values);
        return result.affectedRows
        } catch (error) {
            console.error('Error al registrar el libro:', error);
            return { status: -1, message: 'Error al registrar el libro' };
        }
    }

    async actualizarLibro(libro) {
        try {
            const { id, title, language, genre, editorial, status, file } = libro;

            const sql = `
            UPDATE libreriautl.libros
            SET title = ?, language = ?, genre = ?, editorial = ?, status = ?, file = ?
            WHERE id = ?
            `;
            const values = [title, language, genre, editorial, status, file, id];
        
            const result = await dbController.executeQuery(sql, values);
            return result.affectedRows
        
        } catch (error) {
            console.error('Error al actualizar el libro:', error);
            return { status: -1, message: 'Error al actualizar el libro' };
        }
    }

    async eliminarLibro(libro) {
        try {
            const { id } = libro;
            const sql = `
            DELETE FROM libreriautl.libros
            WHERE id = ?
            `;
            const values = [id];
            
            const result = await dbController.executeQuery(sql, values);
            return result.affectedRows
        
        } catch (error) {
            console.error('Error al eliminar el libro:', error);
            return { status: -1, message: 'Error al eliminar el libro' };
        }
    }

}
module.exports = new librosDao();
