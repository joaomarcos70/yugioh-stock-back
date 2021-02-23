const mysql = require ('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    port: '3000',
    user: 'root',
    password: 'root',
    database:'yugioh-stock-bd'
})

module.exports = connection