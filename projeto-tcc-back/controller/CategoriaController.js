const express = require('express')

const categoria = require('../model/Categoria')

const router = express.Router()

router.post('/categoria/cadastrarCategoria', (req, res) => {})

router.get('/categoria/listarCategoria', (req, res) => {})

router.put('/categoria/alterarCategoria', (req, res) => {})

router.delete('/categoria/apagarCategoria', (req, res) => {})

module.exports = Categoria
