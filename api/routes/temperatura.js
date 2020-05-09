const express = require('express')
const router = express.Router()
const mysql = require('../mysql').pool



router.get('/',(req,res,next)=>{
    mysql.getConnection((error,conn)=>{
        if(error){return res.status(500).send({error:error})}

        conn.query(
            "select * from TEMPERATURA",
            (error,resultado,fields)=>{
                if(error){return res.status(500).send({error:error})};
                return res.status(200).send({response:resultado,
                       
                });
                
            })
        conn.release();
    })
})



module.exports=router