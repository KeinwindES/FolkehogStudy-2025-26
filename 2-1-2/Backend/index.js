const mysql = require("mysql2/promise");

console.log("trying to connect")

process.loadEnvFile("./dev.env");

const config = {
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.DATABASEPASSWORD,
    database: "world"
};

const pool = mysql.createPool(config);

async function getEverythingInTable(table) {
    return await pool.query("SELECT * FROM " + table);
}
async function runApp() {
    const cities = await getEverythingInTable("city");
    console.log(cities);
}
runApp();