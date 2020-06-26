
const mysql = require('mysql')

const pool = mysql.createPool({
            "user":'marllon',
            "password":'marllon',
            "database":'aps',
            "host":'localhost',
            "port":'3306'
}) 


exports.pool = pool
