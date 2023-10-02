const dbController = require('../../../../DBController');

class EditarLibrosController {
  async post(req, res) {
    const { id, title, language, genre, editorial, status, file } = req.body;

    const sql = `
      UPDATE libreriautl.libros
      SET title = ?, language = ?, genre = ?, editorial = ?, status = ?, file = ?
      WHERE id = ?
    `;
    const values = [title, language, genre, editorial, status, file, id];

    try {
      const result = await dbController.executeQuery(sql, values);
      console.log('Libro actualizado:', result);
      res.status(200).json({ message: 'Libro actualizado correctamente' });
    } catch (error) {
      console.error('Error al actualizar el libro:', error);
      res.status(500).json({ message: 'Error al actualizar el libro' });
    }
  }
}

module.exports = new EditarLibrosController();
