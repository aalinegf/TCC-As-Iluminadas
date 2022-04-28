const Sequelize = require('sequelize')

const connection = require('../database/database')

// class Cliente extends Model {
//     static associate (models) {
//         this.belongsToMany(models.Produtos, { foreignKey: 'id_cliente', through: 'Carrinhosclientes', as: 'carrinho' })
//         this.hasMany(models.Produtosclientes, { foreignKey: 'id_cliente', as: 'compras' })
//     }
// }

const Cliente = connection.define('tbl_cliente', {
  id: {
    primaryKey: true,
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    unique: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  cpf: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
})

//  Cliente.sync({ force: true })

module.exports = Cliente
