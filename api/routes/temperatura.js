const express = require('express')
const router = express.Router()
const mysql = require('../mysql').pool


var temperatura = []
var data = []
var hora = []

router.get('/',(req,res,next)=>{
    mysql.getConnection((error,conn)=>{
        if(error){return res.status(500).send({error:error})}

        conn.query(
            "select * from TEMPERATURA",
            (error,resultado,fields)=>{
                if(error){return res.status(500).send({error:error})};

               for(let i = 0 ; i < resultado.length; i++){
                   temperatura.push(resultado[i].Temperatura)
                   data.push(resultado[i].Data)
                   hora.push(resultado[i].Hora)
               }
                return res.status(200).send(
                    {
                        temperatura: temperatura,
                        hora:hora,
                        data: data
                    }   
                );
                
            })
            temperatura = []
            hora = []
            data = []
        conn.release();
    })
})



module.exports=router