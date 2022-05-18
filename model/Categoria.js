const Sequelize = require('sequelize')

const connection = require('../database/database')

const Categoria = connection.define('tbl_categoria', {
  id_categoria: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  nome_categoria: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  descricao_categoria: {
    type: Sequelize.STRING,
    allowNull: false,
  },
})

  //  Categoria.sync({force:true});



module.exports = Categoria
