const perfilController = {
    perfil:(req,res) =>{
        return res.render("paginaPerfil")
    },
    pedidosPerfil:(req,res) =>{
        return res.render("pedidos")
    },
    endereco:(req,res) =>{
        return res.render("endereco")
    },
    dadosUsuario:(req,res) =>{
        return res.render("perfil-dados")
    }    
}

module.exports= perfilController;