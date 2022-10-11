const { sequelize, Usuario } = require("../models/index")
const bcrypt = require('bcrypt')


const loginController = {
    login: (req, res) => {
        res.render('login')
    },
    auth: async (req, res) => {
        const usuario = await Usuario.findOne({
            where: {
                email: req.body.email
            }
        })

        if (!usuario) {
            return res.redirect("login");
        }

        req.session.isAuth = await bcrypt.compareSync(req.body.senha, usuario.senha);
        req.session.user = usuario;

        if (req.session.isAuth) {
            res.redirect("perfil");
        } else {
            return res.redirect("login");
        }
    }
    
}


module.exports = loginController


