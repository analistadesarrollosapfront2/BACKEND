const dbController = require('../../../../DBController');

class RecuperarLibrosController {
  async get(req, res) {
    console.log("Vamos a recuperar el libro");
    const { id } = req.body;
    console.log(id);
    const sql = 'SELECT file FROM libreriautl.libros WHERE id = ?;';
    // console.log(sql);
    const values = [id];
    try {
      const result = await dbController.executeQuery(sql, values);
      res.status(200).json(results);
      console.log(results[0].file);
      // res.status(200).json({ 
      //   message: 'Libro consultados con exito',
      //   status: 200,
      //   error: false,
      //   data: results
      // });
    } catch (error) {
      console.error('Error al obtener libros:', error);
      res.status(500).json({ message: 'Error al obtener libros' });
    }
  }
}

module.exports = new RecuperarLibrosController();
