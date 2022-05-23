const Sequelize = require('sequelize');

const connection = require('../database/database')

const Produto = require('./Produto')

const Cliente = require('./Cliente')

const Carrinho = connection.define('tbl_carrinho', {
    
    id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
    },


})


  Produto.hasMany(Carrinho);
  Cliente.hasMany(Carrinho);

// Carrinho.sync({force: true});


module.exports = Carrinho