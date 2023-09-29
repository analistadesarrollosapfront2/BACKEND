const db = require('../db');

const Ejemplo = {};

Ejemplo.getAll = (result) => {
  db.query('SELECT * FROM ejemplos', (err, res) => {
    if (err) {
      console.error('Error al realizar la consulta:', err);
      result(err, null);
      return;
    }

    console.log('Consulta exitosa:', res);
    result(null, res);
  });
};

module.exports = Ejemplo;
