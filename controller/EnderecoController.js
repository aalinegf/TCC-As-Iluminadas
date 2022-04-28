const express = require('express');

const Endereco = require('../model/Endereco');

const router = express.Router;


router.get('/listarEndereco', (req,res)=>{
    
})

router.post('/cadastrarEndereco', (req,res)=>{

    Endereco.create(

    )

})

router.put('/alterarEndereco', (req,res)=>{

})


router.delete('/deletarEndereco', (req,res) =>{
    
})
