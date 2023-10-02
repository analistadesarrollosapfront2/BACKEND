const dbController = require('../../../../DBController');
class loginController {
  async getAll(req, res) {
    const usuario = req.body.usuario;
    const contrasena = req.body.contrasena;
    const sql = `SELECT * FROM libreriautl.users WHERE user = ? AND password = ?`;
    const values = [usuario, contrasena];
    try {
      const results = await dbController.executeQuery(sql, values);
      console.log(results);
      if (results.length > 0) {
        res.send(true);  
      }else{
        res.send(false);
      }       
    } catch (error) {
      console.error('Error executing query:', error);
      res.status(500).send('Error executing query');
    }
  }
}
module.exports = new loginController();
