const express = require('express');

const endereco = require('../model/Endereco');

const router = express.Router();


router.get('/listarEndereco', (req,res)=>{
    endereco.findAll().then(()=>{res.send(endereco)});
})

router.post('/cadastrarEndereco', (req,res)=>{

    let {cep, complement, number, district, city, uf } = req.body; 

    endereco.create({
        cep,
        complement,
        number,
        district,
        city,
        uf}).then(()=>{
            res.send('ENDEREÇO CADASTRADO COM SUCESSO! ')
        });

})

router.put('/alterarEndereco', (req,res)=>{

})


router.delete('/deletarEndereco', (req,res) =>{
    
})




module.exports = router; 
