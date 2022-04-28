const express = require('express')

const multer = require('multer')  //para as fotos dos produtos 

const fs = require('fs'); 

const produto = require('../model/Produto')


const router = express.Router()


// gerenciar o multer para o recebimento das fotos 

const storage = multer.diskStorage({
  destination: (req, file, cb)=>{
    cb(null, './images/')
  },
  filename: (req,file,cb)=>{
    cb(null, Date.now().toString() + '_' + file.originalname)
  }
})

// definição do tipo de arquivo que vai poder subir

const fileFilter = (req, file, cb) =>{
  
  if(file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
    cb(null, true);
  }else{
      cb(null, false);
  }

}

// realização do processo para subir as fotos

const images = multer({
  storage: storage,
  limits: {
    fieldSize: 1024 * 1024 * 5 
  },
  fileFilter: fileFilter
});

/////////////////////////////////////////////////////////////////////////////////

router.post('/cadastrarProduto', images.single('image'), (req, res) => {

 console.log(req.file[0]);

const { name_product, description, stock } = req.body
const image = req.file[0].path; 

produto.create({
name_product,
description,
stock,
image,
})
.then(() => {
res.send('PRODUTO CADASTRADO')
})
})




router.get('/listarProduto', (req, res) => {
produto.findAll().then((produtos) => {
res.send(produtos)
})
})

router.put('/alterarProduto', (req, res) => {
produto.update(
  {
    name_product,
    description,
    stock,
    image,
    }
)
})

router.delete('/apagarProduto', (req, res) => {})

module.exports = router
