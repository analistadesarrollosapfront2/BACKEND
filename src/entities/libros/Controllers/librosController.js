const dbController = require('../../../../DBController');

class LibrosController {
  async get(req, res) {
    const sql = 'SELECT * FROM libreriautl.libros';

    try {
      const results = await dbController.executeQuery(sql);
      res.status(200).json(results);
    } catch (error) {
      console.error('Error al obtener libros:', error);
      res.status(500).json({ message: 'Error al obtener libros' });
    }
  }
}

module.exports = new LibrosController();
