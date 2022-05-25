const Sequelize = require('sequelize')

const connection = require('../database/database')

const Categoria = connection.define('tbl_categoria', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
})


  


  //  Categoria.sync({force:true});




module.exports = Categoria
