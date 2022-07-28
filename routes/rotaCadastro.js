const express = require('express');
const router = express.Router();
const cadastroController = require('../controllers/cadastroController');
const multer = require("multer")

router.get("/cadastro", cadastroController.cadastro);

module.exports = router;