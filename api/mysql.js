
const mysql = require('mysql')

const pool = mysql.createPool({
            "user":'marllon',
            "password":'Marllon.10',
            "database":'aps',
            "host":'localhost',
            "port":'3306'
}) 


exports.pool = pool
