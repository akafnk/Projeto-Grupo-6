
const loginController = {
    login: (req,res) => {
        res.render('login')
    },
    salvarFormulario: (req,res) => {
    let { email, senha} = req.body
   
    res.redirect('/usuario')
    },
    usuario: (req,res) =>{
        res.render('paginaPerfil')
    }
}

module.exports = loginController
