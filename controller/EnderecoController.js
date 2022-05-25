const express = require('express');

const endereco = require('../model/Endereco');

const router = express.Router();


router.get('/listarEndereco', (req,res)=>{
    endereco.findAll().then(()=>{res.send(endereco)});
})

router.post('/cadastrarEndereco', (req,res)=>{

    let {cep, complement, number, district, city, uf, tblClienteId } = req.body; 

    endereco.create({
        cep,
        complement,
        number,
        district,
        city,
        uf,
        tblClienteId
    }).then(()=>{
            res.send('ENDEREÇO CADASTRADO COM SUCESSO! ')
        });

})

router.put('/alterarEndereco', (req,res)=>{
        
    let {cep, complement, number, district, city, uf, tblClienteId} = req.body; 

    endereco.update({
        cep,
        complement,
        number,
        district,
        city,
        uf,
        tblClienteId
    }).then(()=>{res.send('ENDEREÇO ALTERADO!')})
});


router.delete('/deletarEndereco', (req,res) =>{
    
    let {id} = req.body;

    endereco.destroy({where: {id}}).then(()=>{res.send('ENDEREÇO EXCLUÍDO COM SUCESSO!')});
});




module.exports = router; 
