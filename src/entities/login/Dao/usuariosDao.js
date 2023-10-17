const dbController = require('../../../../DBController');
class usuariosDao {

async buscarPorCorreo(usuario) {
    const sql = 'SELECT * FROM libreriautl.users WHERE user = ?';
    const values = [usuario];
    try {
        const results = await dbController.executeQuery(sql, values);
        console.log(results);
        if (results.length > 0) {
        return results[0];
        } else {
        return null;
        }
    } catch (error) {
        console.error('Error executing query:', error);
        return null;
    }
    }
}
module.exports = new usuariosDao();
