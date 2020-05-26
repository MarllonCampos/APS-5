const express = require('express')
const router = express.Router()
const mysql = require('../mysql').pool
var temperatura = []
var data = []
var hora = []
var inserir = []

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
                   inserir[i] = (Number((resultado[i].Hora).substr(0,2)) - 3 ) 
                   if ( inserir[i] < 10){
                       inserir.push((inserir[i]))
                       inserir[i] = "0"+inserir[i]
                   }
                   inserir[i] = inserir[i].toString()

                   hora.push(`${inserir[i]}${(resultado[i].Hora.substr(2,7))}`)
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
    console.log(req.ips)
    console.log(req.ip)
})



module.exports=router