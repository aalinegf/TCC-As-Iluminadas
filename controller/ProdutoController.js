const express = require('express');

const multer = require('multer');

const produto = require('../model/Produto');

const router = express.Router();

const storage = multer.diskStorage({
    destination: (req,file, cb) =>{
        cb(null, './uploads/')
    },
    filename: (req, file, cb)=>{
        cb(null, Date.now().toString()+ '_'+ file.originalname);
    }
})  // esse vai gerenciar o armazenamento

const fileFilter = (req, file, cb) =>{
    if( file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
        cb(null, true);
    } else{
        cb(null, false)
    }
} // vai gerenciar o tipo de arquivo que eu quero que suba 

const upload = multer({
    storage: storage,
    limits: {
        fieldSize: 1024 * 1024 * 5

        
    },
    fileFilter: fileFilter

}) // vai executar o armazenamento 

router.post('/produto/cadastrarProduto', (req,res)=>{
    
    const{ nome_produto, descricao_produto} = req.body;

    const imagem_produto = req.files[0].path;



    produto.create(
        {nome_produto,
        descricao_produto,
        estoque_produto,
        imagem_produto}
    ).then(()=>{
        res.send('PRODUTO CADASTRADO')
    })
});

router.get('/produto/listarProduto', (req,res)=>{

    produto.findAll().then((produtos)=>{
        res.send(produtos)
    })

});


router.put('/produto/alterarProduto', (req,res)=>{

    produto.update(
        {nome_produto},
        {descricao_produto},
        {estoque_produto},
        {imagem_produto}
    )


});

router.delete('/produto/apagarProduto', (req,res)=>{

   
});


module.exports = router; 


