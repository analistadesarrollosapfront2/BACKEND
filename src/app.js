const express = require('express');
const app = express();
const port = 3000;
const entitiesRoutes  = require('./routes/entitiesRoutes');
const cors = require('cors');

app.use(cors());

app.use((req, res, next) => {
  console.log(`Solicitud recibida: ${req.method} ${req.url}`);
  next();
});

app.use(express.json());
app.use('/api', entitiesRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Error interno del servidor');
});

app.listen(port, () => {
  console.log(`Servidor Express corriendo en el puerto ${port}`);
});
