    const express = require('express');
    const bcrypt = require('bcrypt');

    const cliente = require('../model/Cliente');

    const router = express.Router();



    router.post(
        '/cadastrarCliente',
        (req, res)=>{

            try{

                

                }catch{

                };

        
            
            let { nome_cliente } = req.body;
            let { CPF_cliente } = req.body;
            let { telefone_cliente } = req.body;
            const { email_cliente, senha_cliente } = req.body;
            
        

            cliente.create(
                {nome_cliente,
                CPF_cliente,
                telefone_cliente,
                email_cliente,
                senha_cliente}
                
            ).then(
                ()=>{
                    res.send('Seu cadastro foi efetuado com sucesso!');
                }
            );
            
        }
    );

    router.post(
        '/cliente/login', (req,res) =>{

         const cliente = cliente.find(cliente => cliente.email_cliente === req.body.email_cliente);
         if(cliente == null){
             return res.status(401).send('Não foi posssível prosseguir com o login!')
         } 
         
         try{

           

         }catch{

         }

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