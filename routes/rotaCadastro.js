const express = require('express');
const router = express.Router();
const cadastroController = require('../controllers/cadastroController');
const path = require("path")
const multer = require("multer")
const { body } = require("express-validator")

const multerDiskStorage = multer.diskStorage({
    destination:(req, file, callback) =>{
        const folder = path.join(__dirname,"../public/profile");
        callback(null, folder);
    },
    filename: (req, file, callback) =>{
        const imageName = Date.now() + file.originalname;
        callback(null, imageName)
    },
});

const upload = multer ({storage: multerDiskStorage })
const validacoes = [
    body("nome").notEmpty().withMessage("Deve preencher o nome").bail().isString(),
    body("cpf").notEmpty().isNumeric().isLength({max:11}),
    body("dataNascimento").notEmpty().isNumeric(),
    body("telefone").notEmpty().isNumeric().isLength({min:8, max:11}),
    body("email").notEmpty().isEmail(),
    body("senha").notEmpty().isNumeric().isLength({min:8}),
    body("confirmarSenha").notEmpty().isNumeric().isLength({min:8}),
]

router.get("/cadastro", cadastroController.view);
router.post("/cadastro", upload.single("userImage" ), validacoes, cadastroController.Processarcadastro);

module.exports = router;