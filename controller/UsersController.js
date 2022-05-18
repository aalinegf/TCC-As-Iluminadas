const express = require('express')
const bcryptjs = require('bcryptjs')
const hash = require('bcryptjs')
const { body, validationResult } = require('express-validator')
const request = require('request');   


// router.post(
//     '/cliente/login',  
//     [
//     body('email').isEmail().withMessage('O e-mail precisa ver válido'),
//     body('email').custom((value) => {
//       if (!value) {
//         return Promise.reject('E-mail é obrigatório')
//       }
//       if (value == 'teste@teste.com') {
//         return Promise.reject('E-mail já cadastrado')
//       }
//       return true
//     }),
//     body('password')
//       .isLength({ min: 8 })
//       .withMessage('Este campo precisa preenchido com pelo menos 8 caracteres')
    
    
    
//     ],
//     (req, res) => {
//     const cliente = cliente.find((cliente) => cliente.email === req.body.email)
//     if (cliente == null) {
//       return res.status(401).send('Não foi posssível prosseguir com o login!')
//     }
    
    
//     }
//     )





