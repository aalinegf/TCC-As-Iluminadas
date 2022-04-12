const Sequelize = require('sequelize');

const connection = require('../database/database');

const Cliente = require('./Cliente');

const Endereco = connection.define(
    'tbl_enderecos', {
        id_enderecos: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        cep:{
            type: Sequelize.VARCHAR,
            allowNull: false
        },
        complemento: {
            type: Sequelize.VARCHAR,
            allowNull: false 
        },
        numero: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        bairro: {
            type: Sequelize.VARCHAR,
            allowNull: false 
        },
        cidade: {
            type: Sequelize.VARCHAR,
            allowNull: false 
        },
        uf:{
            type: Sequelize.VARCHAR,
            allowNull: false
        }
       
    }
)

Endereco.belongsTo(Cliente,
    {
        constraint: true,
        foreignKey: 'fk_end_cli'
    })


    module.exports = Endereco;