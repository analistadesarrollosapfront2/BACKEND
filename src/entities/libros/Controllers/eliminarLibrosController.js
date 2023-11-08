const librosAppService = require('../appService/librosAppService');

class EliminarLibrosController {
  async post(req, res) {
    try {
      const eliminarLibros = await librosAppService.eliminarLibros(req.body);
      res.status(201).json(eliminarLibros);

    } catch (error) {
      console.error('Error interno del servidor:', error);
      res.status(500).json({ message: 'Error interno del servidor' });
    }
  }
}

module.exports = new EliminarLibrosController();
