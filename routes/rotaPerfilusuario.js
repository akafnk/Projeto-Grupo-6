const express = require('express');
const router = express.Router();
const perfilController = require("../controllers/perfilController")

router.get("/Perfil", perfilController.perfil)

module.exports= router