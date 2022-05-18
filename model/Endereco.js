const Sequelize = require('sequelize')

const connection = require('../database/database')

const Cliente = require('./Cliente')

const Endereco = connection.define('tbl_enderecos', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  cep: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  complement: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  number: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  district: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  uf: {
    type: Sequelize.STRING,
    allowNull: false,
  },
})

Endereco.belongsTo(Cliente, {
  constraint: true,
  foreignKey: 'fk_end_cli',
})

//  Endereco.sync({force:true})

module.exports = Endereco
