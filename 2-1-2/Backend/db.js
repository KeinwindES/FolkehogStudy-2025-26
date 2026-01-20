const mysql = require("mysql2/promise");

console.log("trying to connect")

process.loadEnvFile("./dev.env");

const config = {
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.DATABASEPASSWORD,
    database: "auth_db"
};

const pool = mysql.createPool(config);

module.exports = pool;