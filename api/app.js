const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const router = express.Router()
const mysql = require('mysql').pool
const Cors = require('cors')
const rotaTemperatura = require('./routes/temperatura')





app.use(morgan('dev'))


app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(Cors())

app.use((req,res,next)=>{
    if(req.method === 'OPTIONS'){
        res.header('Acess-Control-Allow-Methods','PUT,POST,PATCH,DELETE,GET');
        return res.status(200).send({});
    }
    next();
})

app.get('/',(request,response)=>{
    response.status(200).send({
        mensagem : "Hello World"
    })
})

app.use('/temperatura',rotaTemperatura)





module.exports = app