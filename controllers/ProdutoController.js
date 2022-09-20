const {sequelize, Usuario,Pedido}= require('../models/index')
const produtoController = {
    verProduto:(req,res)=>{
        res.render("produtos");
    },
    produtos: async (req,res) =>{
        let usuario = await Usuario.findByPk(3)
    return req.params.id
    }
    
}

module.exports = produtoController;