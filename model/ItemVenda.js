const Sequelize = require('sequelize')

const connection = require('../database/database')

const Venda = require('./Venda')

const Produto = require('./Produto')
const Cliente = require('./Cliente')

const Itemvenda = connection.define('tbl_item_venda', {
  id_item_venda: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  quantidade_produto: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
})

Itemvenda.belongsTo(Venda, {
  constraint: true,
  foreignKey: 'fk_itemven_ven',
})

Itemvenda.belongsTo(Produto, {
  constraint: true,
  foreignKey: 'fk_itemped_prod',
})

Itemvenda.belongsTo(Cliente,{
    constraint: true,
    foreignKey: 'fk_cli_ven',
})

  //  Itemvenda.sync({force:true})

module.exports = Itemvenda
