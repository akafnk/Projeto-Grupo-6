module.exports = (sequelize, DataTypes) => {

    const produtos = sequelize.define("Produto", {
        nome_produto: DataTypes.STRING,
        categoria: DataTypes.STRING,
        preco: DataTypes.DECIMAL (5,2) ,
        tamanho: DataTypes.STRING,
        imagem: DataTypes.STRING
    },
        {
            tableName: 'produtos',
            timestamps: false,
        })
        produtos.associate = (models)=>{
            produtos.belongsToMany(models.Pedido,{
                as: "produto_pedido",
                through: "produtos_pedidos",
                foreignKey: "produto_id",
                otherKey: "pedido_id"
            })
        }
    return produtos
}