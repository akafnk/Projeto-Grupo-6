const express = require('express');
const router = express.Router();
const perfilController = require("../controllers/perfilController")

router.get("/Perfil", perfilController.perfil);
router.get("/Perfil/pedidos", perfilController.pedidosPerfil);
router.get("/Perfil/endereco", perfilController.endereco);
router.get("/Perfil/dados", perfilController.dadosUsuario);
module.exports= router