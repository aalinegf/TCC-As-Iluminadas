const express = require('express')

const venda = require('../model/Venda')

const router = express.Router()

router.post('/realizarVenda', (req,res)=>{
        venda.create({
            date,
            id_venda_cliente
        })
})

router.get('/listarVenda',(req,res)=>{

})

router.put('/atualizarVenda', (req,res)=>{
    
})


