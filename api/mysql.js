const mysql = require('mysql')

const pool = mysql.createPool({
            "user":"root",
            "password":"apsardunip",
            "database":"aps",
            "host":"apsunip5.cslcoibcanu8.sa-east-1.rds.amazonaws.com",
            "port":"3306"
}) 


exports.pool = pool