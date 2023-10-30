const dbController = require('../../../../DBController');
class usuariosDao {

async buscarPorCorreo(usuario) {
    const { email } = usuario;
    const sql = 'SELECT * FROM libreriautl.usersgeneral WHERE email = ?;';
    const values = [email];
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
        // console.log("USUARIO EN EL DAO");
        // console.log(usuario);
        const { name, password, email, user_type, status } = usuario;
        const sql = 'INSERT INTO libreriautl.usersgeneral (name, password, email, user_type, status) VALUES (?, ?, ?, ?, ?);';
        const values = [name, password, email, user_type, status];
        try {
            const results = await dbController.executeQuery(sql, values);
            return { status: 1, message: "registrado exitosamente"};
            
        } catch (error) {
            // console.error('Error executing query:', error);
            if(error.code === "ER_DUP_ENTRY") return{status: -1, message: "Registro duplicado"}
            return error;
        }
    }

    async actualizaUsuario(usuario) {
        const { name, password, email, user_type, status } = usuario;
        const sql = "UPDATE libreriautl.usersgeneral SET name = ?, password = ?, email = ?, user_type = ?, status = ? WHERE email = ?;";
        const values = [name, password, email, user_type, status, email];
        try {
            const results = await dbController.executeQuery(sql, values);
               
            return {
                status: 1,
                message: "actualizado con exito"
            }    
            
        } catch (error) {
            return {
                status: -1,
                message: "Ocurrio un erro al actualizar"
            }  
        }
    }
}
module.exports = new usuariosDao();
