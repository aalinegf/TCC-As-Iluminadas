// NOVA LINHA DE CODIGO PARA CORS
const cors = require('cors')

const express = require('express')

const { listen } = require('express/lib/application')

const { body, validationResult } = require('express-validator')

const app = express()
// NOVA LINHA DE CODIGO PARA CORS
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// IMPORTAÇÃO DO BANCO DE DADOS 

const connection = require('./database/database')

/**
 * IMPORTAÇÃO DO MODEL 
 */
const Cliente = require('./model/Cliente')
const Categoria = require('./model/Categoria')
const Produto = require('./model/Produto')
const Endereco = require('./model/Endereco')
const Venda = require('./model/Venda')
const Carrinho = require('./model/Carrinho')


/**  IMPORTAÇÃO DO CONTROLLER  */

const clienteController = require('./controller/ClienteController')
app.use('/', clienteController);

const produtoController = require('./controller/ProdutoController')
app.use('/', produtoController);

const categoriaController = require('./controller/CategoriaController');
app.use('/', categoriaController);

const enderecoController = require('./controller/EnderecoController')
app.use('/', enderecoController);

const vendaController = require('./controller/VendaController');
app.use('/', vendaController)

const usersController = require('./controller/UsersController');
app.use('/', usersController)








// PORTA QUE ESTA SENDO UTILIZADA 
app.listen(8000, () => {
  console.log('Servidor Iniciado')
})
