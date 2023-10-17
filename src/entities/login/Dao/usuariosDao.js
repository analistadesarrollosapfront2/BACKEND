const dbController = require('../../../../DBController');
class usuariosDao {

  async dao(value) {
   console.log("Este es el string general", value);
  }
}
module.exports = new usuariosDao();
