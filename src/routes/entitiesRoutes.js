const express = require('express');
const router = express.Router();

router.use(express.json());

router.use(async (req, res, next) => {
  try {
    const pathSegments = req.path.split('/').filter(segment => segment !== '')[0];
    console.log('Ruta capturada:', pathSegments);
    // console.log('Cuerpo de la solicitud:', req.body);
    const entityRouter = express.Router();
    const entityRoute = require(`../entities/${pathSegments}/index`);
    entityRouter.use('/', entityRoute);
    router.use(`/${pathSegments}`, entityRouter);
    next();
  } catch (error) {
    console.error(error);
    res.status(500).send('Error: No se pudo cargar el controlador');
  }
});

module.exports = router;
