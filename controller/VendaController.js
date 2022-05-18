const express = require('express')

const venda = require('../model/Venda')

// const cliente = require('../model/Cliente');


const router = express.Router()

router.post('/realizarVenda', (req,res)=>{

        let {date, id_venda_cliente} = req.body

             venda.create({
                  date,
                    id_venda_cliente
        })
})

router.get('/listarVenda',(req,res)=>{

        venda.findAll().then((vendas)=>{res.send(vendas)})

})

router.put('/atualizarVenda', (req,res)=>{

        let {date, id_venda_cliente} = req.body;

            venda.update({
                date,
                id_venda_cliente
            }).then(()=>{res.send('Venda atualizada com sucesso!')});
    
})


module.exports = router; 