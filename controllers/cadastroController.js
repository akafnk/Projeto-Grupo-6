const { validationResult } = require("express-validator")
const {sequelize, Usuario} = require("../models/index")
const bcrypt = require('bcrypt')



const cadastroController = {
    view: (req, res) => {
        return res.render('cadastro')
    },
    criar: async (req,res) =>{
        let dados = req.body
        dados.senha = await bcrypt.hashSync(dados.senha, 11);
        const novoUsuario = await Usuario.create({
            nome:req.body.nome,
            sobrenome:req.body.sobrenome,
            data_nascimento:req.body.data_nascimento,
            telefone:req.body.telefone,
            email:req.body.email,
            senha:req.body.senha,
        })
        return res.redirect('/login')
    },
    Processarcadastro: (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.render("cadastro", { errors: errors.mapped() });
        }
        if (!req.file) {
            return res.send("Selecione um arquivo")
        }
        return res.render("paginaPerfil");
    }
}

module.exports = cadastroController