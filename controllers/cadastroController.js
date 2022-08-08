const { validationResult } = require("express-validator")

const cadastroController = {
    view: (req, res) => {
       return res.render('cadastro')
    },
    Processarcadastro: (req, res) =>{ //revisar com o professor
        const errors = validationResult(req);

        if(!errors.isEmpty()){
            return res.render("cadastro", { errors : errors.mapped() });
        }
        if(!req.file){
            return res.send("Selecione um arquivo")
        }
        console.log(req.file)
       return res.send("Carregada om sucesso");
    }
}

module.exports = cadastroController