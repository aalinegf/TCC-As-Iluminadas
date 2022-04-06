const Sequelize = require('sequelize'); 

const connection = require('../database/database');


const Produto = connection.define(
    'tbl_produto', {
        id_produto: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        nome_produto: {
            type: Sequelize.STRING,
            allowNull: false
        },
        descricao_produto: {
            type: Sequelize.TEXT,
            allowNull: false
        },
        estoque_produto: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        imagem_produto: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }
)





//   Produto.sync({force: true});

module.exports = Produto;