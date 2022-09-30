const { sequelize, Usuario } = require("../models/index")

const perfilController = {

    perfil: (req, res) => {
        return res.render("paginaPerfil", {
        })
    },
    pedidosPerfil: (req, res) => {
        return res.render("pedidos")
    },
}

module.exports = perfilController;