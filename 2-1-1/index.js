const mysql = require("mysql2/promise");
console .log("trying to connect to mysql");

process.loadEnvFile("./dev.env");

const config = {
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.DATABASEPASSWORD,
    database: "world"

};
const pool = mysql.createPool(config);


async function getAllCities() {
    return await pool.query("Select * from city");
}
async function runApp() {
    const cities = await getAllCities();
    console.log(cities);
}
runApp();