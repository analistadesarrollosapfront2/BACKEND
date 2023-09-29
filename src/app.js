// const express = require('express');
// const app = express();
// const port = 3000;
// const db = require('./db'); // Importa la configuración de la base de datos
// const ejemploRoutes = require('./routes/ejemploRoutes'); // Importa las rutas

// // Middleware para manejar solicitudes JSON
// app.use(express.json());

// // Utiliza las rutas
// app.use('/api', ejemploRoutes); // Define un prefijo "/api" para las rutas

// // Inicia el servidor
// app.listen(port, () => {
//   console.log(`Servidor Express corriendo en el puerto ${port}`);
// });



const express = require('express');
const app = express();
const port = 3000;
const postsRoutes = require('./routes/postsRoutes');

app.use(express.json());

app.use('/api', postsRoutes);

app.listen(port, () => {
  console.log(`Servidor Express corriendo en el puerto ${port}`);
});
