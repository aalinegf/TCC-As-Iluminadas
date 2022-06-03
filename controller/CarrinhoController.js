const express = require ('express'); 

const Carrinho = require ('../model/Carrinho'); 

const router = express.Router(); 

router.put('/adicionar', async (req,res)=>{

    let {id, tblProdutoId, tblClienteId} = req.params;

    Carrinho.update({
        id,
        tblClienteId,
        tblProdutoId
    }).then(()=>{})
})



module.exports = router; 