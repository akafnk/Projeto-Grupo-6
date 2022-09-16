const produtoController = {
    verProduto:(req,res)=>{
        res.render("produtos");
    },
    produtos: (req,res) =>
    {req.params.id}
    
}

module.exports = produtoController;