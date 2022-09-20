module.exports = (sequelize, DataTypes) => {

const pedidos = sequelize.define("Pedido", {
        quantidade: DataTypes.INTEGER,
        data_pedido: DataTypes.DATE,
        data_entrega: DataTypes.DATE,
    },
    {
            tableName: 'pedidos',
            timestamps: false,
        })

        pedidos.associate = (models) =>{
            pedidos.belongsTo(models.Usuario,{
                as: "pedido_usuario",
                foreignKey: "usuario_id"
            })
        
            pedidos.belongsToMany(models.Produto,{
                as: "pedido_produto",
                through: "produtos_pedidos",
                foreignKey: "pedido_id",
                otherKey: "produto_id",
                timestamps:false
            })
        }

    return pedidos
}