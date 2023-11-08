const librosAppService = require('../appService/librosAppService');

class ViewLibrosController {
  async post(req, res) {
    try {
        const vistaLibros = await librosAppService.vistaLibros(req.body);
        res.status(201).json(vistaLibros);
  
    } catch (error) {
    console.error('Error interno del servidor:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
    }
  }
}

module.exports = new ViewLibrosController();
