const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const router = express.Router()
const mysql = require('mysql').pool
const rotaTemperatura = require('./routes/temperatura')





app.use(morgan('dev'))


app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


app.use((req,res,next)=>{
    res.header('Acess-Control-Allow-Origin','Origin: http://127.0.0.1:5500');
    res.header(
        'Acess-Control-Allow-Header',
        'Origin,X-Requested-With,Content-Type,Accept,Authorization'
        );
    if(req.method === 'OPTIONS'){
        res.header('Acess-Control-Allow-Methods','PUT,POST,PATCH,DELETE,GET');
        return res.status(200).send({});
    }
    next();
})


app.use('/temperatura',rotaTemperatura)





module.exports = app