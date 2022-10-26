const { sequelize, Produto } = require("../models")

const pagamentoController = {
    pagamentoProdutos: async (req,res) =>{
        const idProduto = req.session.sacola; 
        const dadosProduto = await Produto.findByPk(idProduto, { raw: true });
            
        if (!dadosProduto) {
            return res.redirect("catalogo");
        }
        res.render("pagamento",  dadosProduto);
    
        },

}
module.exports = pagamentoController