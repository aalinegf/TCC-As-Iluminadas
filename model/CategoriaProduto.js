const Sequelize = require('sequelize')

const connection = require('../database/database')

const Categoria = require('./Categoria')

const Produto = require('./Produto')

const CategoriaProduto = connection.define('tbl_categoria_produto', {
  id_categoria_produto: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
})

CategoriaProduto.belongsTo(Categoria, {
  constraint: true,
  foreignKey: 'fk_cat_prod',
})

CategoriaProduto.belongsTo(Produto, {
  constraint: true,
  foreignKey: 'fk_prod_cat',
})

    // CategoriaProduto.sync({force:true});

module.exports = CategoriaProduto
