

module.exports = (sequelize, DataTypes) => {

    const endereco = sequelize.define("Endereco", {
        rua: DataTypes.STRING,
        cep: DataTypes.INTEGER,
        cidade: DataTypes.STRING,
        estado: DataTypes.STRING,
        pais: DataTypes.STRING,
        usuario_id: DataTypes.INTEGER
    },
        {
            tableName: 'enderecos',
            timestamps: false,
        })

        endereco.associate= (models) =>{
            endereco.belongsTo(models.Usuario,{
                as: "endereco_usuario",
                foreignKey: "usuario_id"
            })
        }

    return endereco
}