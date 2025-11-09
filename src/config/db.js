const mysql = require("mysql2")

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: 3306,
  connectionLimit: 5,
})


db.getConnection((err, conn) => {
  if (err) console.log("❌ MySQL connect error:", err.message);
  else {
    console.log("✅ Connected to MySQL (pool)");
    conn.release(); 
  }
});
module.exports = db