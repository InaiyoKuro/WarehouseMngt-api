const mysql = require("mysql2/promise")

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 5,
  queueLimit: 0
})


// db.connect((err) => {
//   if(err) console.log("Failed to connect to MySQL", err);
//   else console.log("Successfully connected to MySQL");

// })

module.exports = db