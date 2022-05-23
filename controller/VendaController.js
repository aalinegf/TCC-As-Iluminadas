const express = require('express')

const venda = require('../model/Venda');

const router = express.Router();

router.post('/realizarVenda', (req,res)=>{

        let { total_price,tblClienteId,tblProdutoId, tblCarrinhoId } = req.body

             venda.create({
                total_price,     
                tblClienteId,
                tblProdutoId,
                tblCarrinhoId
                    
        }).then(()=>{res.send('Venda realizada!')})
});

router.get('/listarVenda',(req,res)=>{

        venda.findAll().then((vendas)=>{res.send(vendas)})

});

router.put('/atualizarVenda', (req,res)=>{

        let { total_price ,tblClienteId, tblProdutoId, tblCarrinhoId } = req.body;

            venda.update({
                total_price,
                tblClienteId,
                tblProdutoId,
                tblCarrinhoId
                
            }).then(()=>{res.send('Venda atualizada com sucesso!')});
    
});


module.exports = router; 