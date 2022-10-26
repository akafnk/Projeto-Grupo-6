const { sequelize, Produto } = require("../models");

const catalogoController = {
    catalogoProdutos: async (req,res)=>{
        const produtosCatalogo = await Produto.findAll({ raw: true })
        res.render("catalogo", {produtosCatalogo: produtosCatalogo})
    }

}

module.exports = catalogoController