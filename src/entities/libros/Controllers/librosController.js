class LibrosController {
  getAll(req, res) {
    console.log("Por fin está llegando al controlador de libros");
    // Aquí puedes realizar operaciones relacionadas con la entidad de libros
    res.send('Obteniendo todos los libros');
  }
}

module.exports = new LibrosController();