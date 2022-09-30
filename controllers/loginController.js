const { sequelize, Usuario } = require("../models/index")
const bcrypt = require('bcrypt')


const loginController = {
    login: (req, res) => {
        res.render('login')
    },
    auth: async (req, res) => {
        const logarUsuario = req.body
        const usuario = await Usuario.findOne({
            attributes: ["email", "senha"],
            where: {
                email: req.body.email
            }
        })
        if (usuario === null) {
            return res.redirect("login")
        }
        if (await bcrypt.compareSync(req.body.senha, usuario.senha)) {
            req.session.isAuth = usuario.email
            req.session.isAuth = usuario.senha
        }
        res.redirect("/perfil")
    }
}


module.exports = loginController


