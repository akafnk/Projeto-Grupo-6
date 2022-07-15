const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/ProdutoController')

router.get('/produtos', produtoController.verProduto);

module.exports = router;