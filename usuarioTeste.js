const {sequelize, Usuario}= require('./models/index')


Usuario.findByPk(2).then(result=>{
    console.log(result.toJSON())
    }
)
async function buscarUsuario(){
    const usu = await Usuario.findByPk(4, {include:['usuario_endereco']})
    console.log(usu.toJSON())
}
buscarUsuario()










