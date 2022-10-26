const express = require ("express");
const router = express.Router();

const sucessoController = require("../controllers/sucessoController");

router.get("/sucesso", sucessoController.sucesso);

module.exports= router