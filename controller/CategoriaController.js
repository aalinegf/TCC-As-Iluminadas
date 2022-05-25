const express = require('express')

const categoria = require('../model/Categoria');

const router = express.Router()

router.post('/cadastrarCategoria', (req, res) => {

    console.log(req.body);

    let {name} = req.body

        categoria.create({
            name,
        }).then(()=>{res.send('Categoria cadastrada!')});
});

router.get('/listarCategoria', (req, res) => {
        categoria.findAll().then((categorias)=>{res.send(categorias)})
})

router.get('/listarCategoria/:id', (req,res)=>{

    let {id} = req.params;
    categoria.findByPk(id).then((categoria)=>{res.send(categoria)});
});

router.put('/alterarCategoria', (req, res) => {

    let {name} = req.body;

        categoria.update({
            name
            
        })
})

router.delete('/apagarCategoria', (req, res) => {
        let {id} = req.body;
            categoria.destroy({where: {id}}).then(()=>{
                res.send('TOMARA QUE DE CERTOO!')
            })
})

module.exports = router;
