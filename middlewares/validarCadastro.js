function validarCadastro (req,res,next){
    const cadastro = req.body
    console.log(cadastro)
    if (cadastro.nome == ""){
     console.log("vazio")
     res.status(403).send("Escrever o nome")
 }else{
     next()
      }
 }
 module.exports= validarCadastro;
 