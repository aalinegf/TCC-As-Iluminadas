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


        

module.exports = Carrinho