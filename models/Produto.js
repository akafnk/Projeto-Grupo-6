module.exports = (sequelize, DataTypes) => {

    const produtos = sequelize.define("Produto", {
        nome_produto: DataTypes.STRING,
        categoria: DataTypes.STRING,
        preco: DataTypes.DECIMAL (5,2) ,
        tamanho: DataTypes.STRING,
    },
        {
            tableName: 'produtos',
            timestamps: false,
        })
    return produtos
}