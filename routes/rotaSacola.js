const express = require ("express")
const router = express.Router()

const sacolaController = require("../controllers/sacolaController")

router.get("/sacola", sacolaController.sacolaProdutos)

module.exports= router