const Sequelize = require('sequelize');


const connection = require('../database/database');

// class Cliente extends Model {
//     static associate (models) {
//         this.belongsToMany(models.Produtos, { foreignKey: 'id_cliente', through: 'Carrinhosclientes', as: 'carrinho' })
//         this.hasMany(models.Produtosclientes, { foreignKey: 'id_cliente', as: 'compras' })
//     }
// }          




const Cliente = connection.define(
    'tbl_cliente', {
        id_cliente: {
            primaryKey: true,
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            unique: true
        },
        nome_cliente: {
            type: Sequelize.STRING,
            allowNull: false
        },
        CPF_cliente: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        telefone_cliente: {
            type: Sequelize.STRING,
            allowNull: false
        },
        email_cliente: {
            type: Sequelize.STRING,
            allowNull: false
        },
        senha_cliente: {
            type: Sequelize.STRING,
            allowNull: false
        }

    }
)

//    Cliente.sync({force: true})


module.exports = Cliente;