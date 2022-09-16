module.exports = (sequelize, DataTypes) => {

   const pedidos = sequelize.define("Pedido", {
        quantidade: DataTypes.INTEGER,
        data_pedido: DataTypes.DATE,
        data_entrega: DataTypes.DATE,
  //ver se precisa a chave estrangeria aqui 
    },
       {
            tableName: 'pedidos',
            timestamps: false,
        })
    return pedidos
}