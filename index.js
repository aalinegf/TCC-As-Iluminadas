
const express = require('express');
const { listen } = require('express/lib/application');



    const app = express();

    app.use(express.json());
    app.use(express.urlencoded({extended:true}));


    const connection = require('./database/database');



    const Cliente = require('./model/Cliente');
    const Categoria = require('./model/Categoria');
    const Produto = require('./model/Produto');
    const CategoriaProduto = require('./model/CategoriaProduto');
    const Endereco = require('./model/Endereco');
    const Venda = require('./model/Venda');
    const Itemvenda = require('./model/ItemVenda');


    const clienteController = require('./controller/ClienteController');
    app.use('/', clienteController);

    const produtoController = require('./controller/ProdutoController');
    app.use('/', produtoController);




    app.listen(3000, ()=>{
        console.log('Servidor Iniciado');
    }); 