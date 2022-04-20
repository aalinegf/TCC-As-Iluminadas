  const express = require('express');
  const bcrypt = require('bcrypt');

 const cliente = require('../model/Cliente');
 const  hash  = require('bcrypt');
const { body, validationResult } = require('express-validator');

            const router = express.Router();



        router.post ('/cadastrarCliente', [
            body('email_cliente').isEmail().withMessage('O e-mail precisa ver válido'),
            body('email_cliente').custom(value =>{
                if(!value){
                    return Promise.reject('E-mail é obrigatório');
                }
                if(value == 'teste@teste.com'){
                    return Promise.reject('E-mail já cadastrado');
                }
                return true
            }),
            body('senha_cliente').isLength({min: 8}).withMessage('este campo precisa preenchido com pelo menos 8 caracteres'),
           body('nome_cliente').isLength({min: 3}).withMessage('Este campo precisa ser preenchido com pelo menos 3 caracteres'),
           body('CPF_cliente').isNumeric().withMessage('CPF precisa ser numerico')
           
        ], (req,res)=>{

            const err = validationResult(req);
            if(!err.isEmpty()){
                return res.status(401).json({err: err.array()});
            }



        })

        router.post(
            '/cliente/login', [
            body('email_cliente').isEmail(),
            body('senha_cliente').isLength({min: 8})
        ], (req,res) =>{

            const cliente = cliente.find(cliente => cliente.email_cliente === req.body.email_cliente);
            if(cliente == null){
                return res.status(401).send('Não foi posssível prosseguir com o login!')
            } 
            
            //  try{

            //     if(await bcrypt.compare(req.body.senha_cliente, cliente.senha_cliente) ){
            //         res.send('Você logou com sucesso!')
            //     } else{
            //         res.send('Não foi dessa vez, tente novamente!')
            //     }
            

            //  }catch{
            //     res.status(500).send();
            //  }

            }
        )

        router.get(
            '/cliente/listarCliente',
            (req, res)=>{
            
                cliente.findAll()
                        .then(
                            (clientes)=>{
                                res.send(clientes);
                            }
                        );

                
            }
        );

        router.get( '/cliente/listarCliente/:id', (req, res)=>{


            let {id} = req.params;
            


            cliente.findByPk(id).then(
                (clienteID) => {
                    res.send(clienteID);

                }
            )         
            
            
        });


        router.put(
            '/cliente/alterarCliente',
            (req, res)=>{
                
                

                let{id,nome_cliente,CPF_cliente,telefone_cliente,email_cliente} = req.body;

                cliente.update( 
                    {nome_cliente,
                    CPF_cliente,
                    telefone_cliente,
                    email_cliente,
                    senha_cliente,
                    where: {id}}

                ).then( () => {
                    res.send('TESTE')
                } );

                
            }
        );

        router.delete(
            '/cliente/excluirCliente',
            (req, res)=>{

            let{id} = req.body;

            cliente.destroy(
                {where: {id}}
            ).then(
                () => {
                    res.send('TESTE')
                }

            );

            

                
            }
        );

        // router.post('/cliente/login', resolver(middleware.autenticacao), resolver(clienteController.login))	// autenticação e login (gera token JWT) do Cliente
        // 	router.delete('/cliente/logout', middleware.autorizacao, resolver(clienteController.logout))	

        module.exports = router;