module.exports = (sequelize, DataTypes) => {

    const Usuario = sequelize.define("Usuario", {
        nome: DataTypes.STRING,
        sobrenome: DataTypes.STRING,
        email: DataTypes.STRING,
        senha: DataTypes.STRING
    },
        {
            tableName: 'usuarios',
            timestamps: false,
        })

    Usuario.associate = (models) => {
        
        Usuario.hasMany(models.Endereco, {
            as: "usuario_endereco",
            foreignKey: "usuario_id"
        })

        Usuario.hasMany(models.Pedido, {
            as: "usuario_pedido",
            foreignKey: "usuario_id"
        })
    }

    return Usuario
}