const dbController = require('../../../../DBController');

class LibrosController {
  async getAll(req, res) {
    console.log("VAMOS A CONSULTAR EN BASE DE DATOS");

    const sql = `SELECT * FROM libreriautl.usuarios`;
    const values = [];

    try {
      const results = await dbController.executeQuery(sql, values);
      console.log(results);
      res.send(results);
    } catch (error) {
      console.error('Error executing query:', error);
      res.status(500).send('Error executing query');
    }
  }
}

module.exports = new LibrosController();
