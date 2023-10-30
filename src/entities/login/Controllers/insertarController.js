const usuariosAppService = require('../appService/usuariosAppservice');
const emailService = require('../appService/emailService');

class insertarController {
  async post(req, res) {
    try {
        
        const resultInsert = await usuariosAppService.registroUsuario(req.body);
        const resultEmail = await emailService.enviarCorreo(req.body.email, resultInsert.message);

        res.status(200).json(resultEmail);

      } catch (error) {
        console.error('Error executing query:', error);
        res.status(500).send('Error al insertar usuario');
      }
  }

  async put(req, res) {
    try {
        
        const resultaActualizar = await usuariosAppService.actualizarUsuario(req.body);

        const resultEmail = await emailService.enviarCorreo(req.body.email, resultaActualizar.message);

        res.status(200).json(resultEmail);

      } catch (error) {
        console.error('Error executing query:', error);
        res.status(500).send('Error al actualizar usuario');
      }
  }
}
module.exports = new insertarController();
