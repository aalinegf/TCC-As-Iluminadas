const Sequelize = require('sequelize')

const connection = require('../database/database')

const Categoria = require('./Categoria');

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
    type: Sequelize.DECIMAL,
    allowNull: false
  }

})

// implementação da chave estrangeira 

Categoria.hasMany(Produto); 

  // Produto.sync({force: true});

module.exports = Produto
