const dbController = require('../../../../DBController');

class EliminarLibrosController {
  async delete(req, res) {
    const { id } = req.body;

    const sql = `
      DELETE FROM libreriautl.libros
      WHERE id = ?
    `;
    const values = [id];

    try {
      const result = await dbController.executeQuery(sql, values);
      console.log('Libro eliminado:', result);
      res.status(200).json({ message: 'Libro eliminado correctamente' });
    } catch (error) {
      console.error('Error al eliminar el libro:', error);
      res.status(500).json({ message: 'Error al eliminar el libro' });
    }
  }
}

module.exports = new EliminarLibrosController();
