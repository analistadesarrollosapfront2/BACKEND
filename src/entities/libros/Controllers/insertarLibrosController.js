const dbController = require('../../../../DBController');

class InsertarLibrosController {
  async post(req, res) {
    const { title, language, genre, editorial, status, file } = req.body;
    // console.log(file.length);
    // console.log(file);
    const sql = `
      INSERT INTO libreriautl.libros (title, language, genre, editorial, status, file)
      VALUES (?, ?, ?, ?, ?, ?)
    `;
    const values = [title, language, genre, editorial, status, file];

    try {
      const result = await dbController.executeQuery(sql, values);
      console.log('Libro registrado:', result);
      res.status(201).json({ message: 'Libro registrado correctamente' });
    } catch (error) {
      console.error('Error al registrar el libro:', error);
      res.status(500).json({ message: 'Error al registrar el libro' });
    }
  }
}

module.exports = new InsertarLibrosController();