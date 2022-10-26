const {sequelize, Produto }= require('../models/index');

const produtoController = {
    verProduto: async (req, res) =>{
        const id = req.params.id;

        const produto = await Produto.findByPk(id, { raw: true });

        if (produto) {
            res.render("produtos", produto);
        } else {
            res.render("catalogo");
        }
    },
    produtos: async (req,res) =>{
        let usuario = await Usuario.findByPk()
        return req.params.id
    }
    
}

module.exports = produtoController;