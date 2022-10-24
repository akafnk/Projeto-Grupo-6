const express = require ("express")
const router = express.Router()

const sacolaController = require("../controllers/sacolaController")
const ValidarLogin = require("../middlewares/validarLogin")

router.get("/sacola", ValidarLogin, sacolaController.sacolaProdutos)
router.post("/sacola", sacolaController.adicionarProduto);

module.exports= router