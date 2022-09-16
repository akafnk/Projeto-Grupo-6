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
        const imageName = Date.now() + path.extname (file.originalname);
        callback(null, imageName)
    },
});

const upload = multer ({storage: multerDiskStorage })
const validacoes = [
    body("nome").notEmpty().withMessage("Deve preencher o nome").isString().bail(),
    body("nascimento").notEmpty().withMessage("Deve preencher a data").isDate(),
    body("telefone").notEmpty().withMessage("Deve inserir um telefone válido").isNumeric().isLength({min:8, max:11}),
    body("email").notEmpty().withMessage("Deve inserir um email válido").isEmail(),
    body("senha").notEmpty().withMessage("A senha deve ter no mínimo 6 caracteres ").isNumeric().isLength({min:6}),
    body("senhaconf").notEmpty().withMessage("Deve confirmar a senha").isNumeric().isLength({min:6})
]

router.get("/cadastro", cadastroController.view);
router.post("/cadastro", upload.single("userImage" ), validacoes, cadastroController.Processarcadastro);

module.exports = router;