const express = require('express');
const router = express.Router();
const perfilController = require("../controllers/perfilController");
const ValidarLogin = require('../middlewares/validarLogin');

router.get("/Perfil", ValidarLogin, perfilController.perfil);
router.get("/Perfil/pedidos",ValidarLogin, perfilController.pedidosPerfil);

router.get("/editar/:id", ValidarLogin, perfilController.editar);
router.put("/editar/:id", ValidarLogin, perfilController.update);
router.delete("/editar/:id", ValidarLogin, perfilController.destroy);


module.exports = router ;