const { sequelize, Produto } = require("../models")

const homeController = {
    home : async (req,res)=>{
        const todosProdutos = await Produto.findAll({limit: 5})
        res.render("home", {todosProdutos: todosProdutos})
    }

    
}


module.exports = homeController;