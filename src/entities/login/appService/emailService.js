const usuariosCqrs = require('../Cqrs/usuariosCqrs');
const usuariosDao = require('../Dao/usuariosDao');

class emailService {
  async enviarCorreo(email, body) {
    return {message: "Correo enviado a "+ email + " con el siguiente mensaje: "+ body};
    
  }
}
module.exports = new emailService();


