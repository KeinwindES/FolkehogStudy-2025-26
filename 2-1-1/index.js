const mysql = require("mysql2/promise");
console .log("trying to connect to mysql");
mysql.createConnection().then(e => {
    console .log("connected to mysql");
})