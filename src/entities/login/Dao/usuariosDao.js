const dbController = require('../../../../DBController');
class usuariosDao {

async buscarPorCorreo(usuario) {
    const { email, password } = usuario;
    const sql = 'SELECT * FROM libreriautl.usersgeneral WHERE email = ? AND password = ?;';
    const values = [email, password];
    try {
        const results = await dbController.executeQuery(sql, values);
        
        if (results.length > 0) {
            
            return {
                status: 1,
                data: results[0]
            }    
        
        } else {
            
            return {
                status: -1,
                message: "Credenciales invalidas"
            };

        }
    } catch (error) {
        console.error('Error executing query:', error);
        return null;
    }
    }

    async insertarUsuario(usuario) {
        const { name, password, email, user_type, status } = usuario;
        const sql = 'INSERT INTO libreriautl.usersgeneral (name, password, email, user_type, status) VALUES (?, ?, ?, ?, ?);';
        const values = [name, password, email, user_type, status];
        try {
            const results = await dbController.executeQuery(sql, values);
            console.log(results);    
            return {
                status: 1,
                message: "Registro exitoso"
            }    
            
        } catch (error) {
            console.error('Error executing query:', error);
            if(error.code === "ER_DUP_ENTRY") return{status: -1, message: "Registro duplicado"}
            return error;
        }
    }
}
module.exports = new usuariosDao();
