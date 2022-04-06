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
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        nome_cliente: {
            type: Sequelize.STRING,
            allowNull: false
        },
        cpf_cliente: {
            type: Sequelize.STRING,
            allowNull: false
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

//   Cliente.sync({force: true})


module.exports = Cliente;