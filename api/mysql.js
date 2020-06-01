const mysql = require('mysql')

const pool = mysql.createPool({
            "user":process.env.USER,
            "password":'marllon',
            "database":'aps',
            "host":process.env.DB_HOST,
            "port":'3306'
}) 


exports.pool = pool