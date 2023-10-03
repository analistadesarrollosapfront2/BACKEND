const dbController = require('../../../../DBController');

class EliminarUniversidadesController {
  async post(req, res) {
    const { id } = req.body;
    // console.log(req.body);
    const sql = `
      DELETE FROM libreriautl.universidades
      WHERE id = ?
    `;
    const values = [id];

    try {
      const result = await dbController.executeQuery(sql, values);
      console.log('Universidad eliminado:', result);
      res.status(200).json({ message: 'Universidad eliminado correctamente' });
    } catch (error) {
      console.error('Error al eliminar la universidad:', error);
      res.status(500).json({ message: 'Error al eliminar la universidad' });
    }
  }
}

module.exports = new EliminarUniversidadesController();
