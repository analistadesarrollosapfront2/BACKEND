const librosAppService = require('../appService/librosAppService');

class EditarLibrosController {
  async post(req, res) {
    try {
      const actualizarLibros = await librosAppService.actualizarLibros(req.body);
      res.status(201).json(actualizarLibros);

    } catch (error) {
      console.error('Error interno del servidor:', error);
      res.status(500).json({ message: 'Error interno del servidor' });
    }
  }
}

module.exports = new EditarLibrosController();
