const express = require('express');
const router = express.Router();
const catalogoController = require ('../controllers/catalogoController')


router.get ('/catalogo', catalogoController.catalogoProdutos)


module.exports = router;

