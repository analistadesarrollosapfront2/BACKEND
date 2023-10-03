const dbController = require('../../../../DBController');

class UniversidadesController {
  async get(req, res) {
    const sql = 'SELECT * FROM libreriautl.universidades';
    try {
      const results = await dbController.executeQuery(sql);
      res.status(200).json({ 
        message: 'Libro consultados con exito',
        status: 200,
        error: false,
        data: results
      });
    } catch (error) {
      console.error('Error al obtener libros:', error);
      res.status(500).json({ message: 'Error al obtener libros' });
    }
  }
}

module.exports = new UniversidadesController();
