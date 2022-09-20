const {sequelize, Usuario,Pedido}= require('./models/index')


Usuario.findByPk(3).then(result=>{
   //console.log(result.toJSON())
    }
)
async function buscarUsuario(){
    const usu = await Pedido.findByPk(1, {include:['pedido_produto']})
    console.log(usu)
}
buscarUsuario()










