const { sequelize, Produto } = require("../models")

const sacolaController = {
    sacolaProdutos: async (req,res) =>{
        const idProduto = req.session.sacola; 
        const dadosProduto = await Produto.findByPk(idProduto, { raw: true });
        
        if (!dadosProduto) {
            return res.redirect("catalogo");
        }
        res.render("sacola",  dadosProduto);

    },


    //adicionar no carrinho
    adicionarProduto: (req,res) => {
        let id = req.body.addProduto;
        req.session.sacola = id;
        res.redirect("sacola");

    },

    //Esvaziar carrinho
    
    limparCarrinho: (req,res) => {

        req.session.sacola = undefined;
        res.redirect("catalogo");
    
    }

}
module.exports = sacolaController