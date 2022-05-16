const Sequelize = require('sequelize')

const connection = require('../database/database')

const Produto = connection.define('tbl_produto', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name_product: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  stock: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  image: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  price_product: {
    type: Sequelize.FLOAT,
    allowNull: false
  }

})

  // Produto.sync({force: true});

module.exports = Produto
