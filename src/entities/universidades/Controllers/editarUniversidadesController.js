const dbController = require('../../../../DBController');

class EditarUniversidadesController {
  async post(req, res) {
    const { id, protocolo, nombre, ip, base, ruta } = req.body;

    const sql = `
      UPDATE libreriautl.universidades
      SET protocolo = ?, nombre = ?, ip = ?, base = ?, ruta = ?
      WHERE id = ?
    `;
    const values = [ protocolo, nombre, ip, base, ruta, id];

    try {
      const result = await dbController.executeQuery(sql, values);
      console.log('Registro actualizado:', result);
      res.status(200).json({ message: 'Registro actualizado correctamente' });
    } catch (error) {
      console.error('Error al actualizar el registro:', error);
      res.status(500).json({ message: 'Error al actualizar el registro' });
    }
  }
}

module.exports = new EditarUniversidadesController();
