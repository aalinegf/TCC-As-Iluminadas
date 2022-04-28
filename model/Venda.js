const Sequelize = require('sequelize')

const connection = require('../database/database')

const Cliente = require('./Cliente')

const Venda = connection.define('tbl_venda', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },

  date: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  id_venda_cliente: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
})

Venda.belongsTo(Cliente, {
  constraint: true,
  foreignKey: 'fk_ven_cli',
})


    // Venda.sync({force: true})


module.exports = Venda
