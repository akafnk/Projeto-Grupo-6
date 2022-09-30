const express = require('express');
const router = express.Router();
const perfilController = require("../controllers/perfilController")
const ValidarLogin = require('../middlewares/validarLogin')


router.get("/Perfil", ValidarLogin, perfilController.perfil);
router.get("/Perfil/pedidos",ValidarLogin, perfilController.pedidosPerfil);



module.exports= router 