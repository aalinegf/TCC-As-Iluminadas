const expres = require('express'); 

const bcrypt = require('bcrypt');


const cliente = require('./controller/ClienteController'); 

const users = []; 

const router = expres.Router();

router.post('/login', (req, res)=>{

    try{

        const hash = await bcrypt.hash(senha_cliente, 10)
        

    } catch{
        res.status
    }

})