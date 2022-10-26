const { sequelize, Usuario } = require("../models/index");

const perfilController = {

    perfil: (req, res) => {
        const user = req.session.user;
        return res.render("paginaPerfil", user);
    },
    pedidosPerfil: (req, res) => {
        return res.render("pedidos");
    },
    editar: async (req, res) => {
        const { id } = req.params;
        const user = await Usuario.findByPk(id, { raw: true });
        return res.render("perfil-dados", user);
    },
    update: async (req, res) => {
        const form = req.body;
        const { id } = req.params;
        
        const update = await Usuario.update({
            attributes: ["nome", "sobrenome", "telefone"],
            nome: req.body.nome,
            sobrenome: req.body.sobrenome,
            telefone: req.body.telefone,
        },
            {
                where: {
                    id: id
                }
            })
        console.log(update)
        res.redirect("/perfil")

    },
    destroy: async (req, res) => {
        const { id } = req.params;

        const deletar = await Usuario.destroy({
            where: {
                id: id
            }
        })
        res.redirect("/login")
    },
}

module.exports = perfilController;