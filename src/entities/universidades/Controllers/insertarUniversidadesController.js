const dbController = require('../../../../DBController');

class InsertarUniversidadesController {
  async post(req, res) {
    const { protocolo, nombre, ip, base, ruta } = req.body;
 
    const sql = `
      INSERT INTO libreriautl.universidades (protocolo, nombre, ip, base, ruta)
      VALUES (?, ?, ?, ?, ?)
    `;
    const values = [protocolo, nombre, ip, base, ruta];

    try {
      const result = await dbController.executeQuery(sql, values);
      console.log('Libro registrado:', result);
      res.status(201).json({ message: 'Registrado correctamente' });
    } catch (error) {
      console.error('Error al registrar:', error);
      res.status(500).json({ message: 'Error al registrar el libro' });
    }
  }
}

module.exports = new InsertarUniversidadesController();