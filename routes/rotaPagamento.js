const express = require ("express")
const router = express.Router()

const pagamentoController = require("../controllers/pagamentoController")

router.get("/pagamento", pagamentoController.pagamentoProdutos)

module.exports= router