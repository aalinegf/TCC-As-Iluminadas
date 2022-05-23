const Sequelize = require('sequelize')

const connection = require('../database/database');
const Carrinho = require('./Carrinho');
const Cliente = require('./Cliente');
const Produto = require('./Produto');


const Venda = connection.define('tbl_venda', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  total_price: {
    type: Sequelize.DECIMAL,
    allowNull: false 
  },
})


  /** CHAVES ESTRANGEIRAS */


  Cliente.hasMany(Venda);
  Produto.hasMany(Venda); 
  Carrinho.hasMany(Venda);

    // Venda.sync({force: true})


module.exports = Venda
