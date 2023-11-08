const librosAppService = require('../appService/librosAppService');

class InsertarLibrosController {
  async post(req, res) {
    
    try {
      const registrarLibros = await librosAppService.registrarLibros(req.body);
      res.status(201).json(registrarLibros);

    } catch (error) {
      console.error('Error interno del servidor:', error);
      res.status(500).json({ message: 'Error interno del servidor' });
    }
  }
}

module.exports = new InsertarLibrosController();