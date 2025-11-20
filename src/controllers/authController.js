const crypto = require("crypto")
const db = require("../config/db.js")
const jwt = require("jsonwebtoken")

const hashPassword = (password) => {
  return crypto.createHash("sha256").update(password).digest("hex")
}


const register = (req, res) => {
  try{
    const { email, username, password } = req.body
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)){
      return res.json({ status: false, msg: "Email invalid" })
    }
    
    const usernameRegex = /^[a-zA-Z0-9]+$/;
    if(!usernameRegex.test(username)){
      return res.json({ status: false, msg: "Username invalid" })
    }

    if(password.length < 6){
      return res.json({ status: false, msg: "Password too short" })
    }
    
    const hash = hashPassword(password)

    const sql = `
    INSERT INTO users (email, username, password)
    VALUES (?, ?, ?)
    `
    
    db.query(sql, [email, username, hash], (err) => {
      if(err) return res.status(501).json({ status: false, error: err.message })
      return res.json({ status: true, msg: "Đăng ký thành công" })
    })

  }catch(e){
    if(err) return res.status(404).json({ status: false, error: err.message })
  }
}

const getUsers = (req,res) => {
  try{
    const sql = `
    SELECT * FROM users
    `

    db.query(sql, (err, result) => {
      if(err) return res.status(501).json({ status: false, error: err.message })
      return res.json({ result })
    })
  }catch(e){
    console.log(e)
  }
}



const login = (req,res) => {
  try{
    const { username, password } = req.body

    const hash = hashPassword(password)

    const sql = `
      SELECT * FROM users WHERE username = ? AND password = ?
    `

    db.query(sql, [username, hash], (err, result) => {
      if(err) return res.status(500).json({ status: false, msg: "Server error", err: err.message })

      if(result.length === 0) return res.json({ status: false, msg: "Sai tài khoản hoặc mật khẩu" })
      
      const accessToken = jwt.sign(
        {id: result[0].id, username: result[0].username, role: result[0].role},
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      )
      const refreshToken = jwt.sign(
        {id: result[0].id, username: result[0].username, role: result[0].role},
        process.env.JWT_SECRET,
        { expiresIn: "7d" }
      )

      return res.json({
        status: true,
        msg: "Đăng nhập thành công",
        accessToken,
        refreshToken,
        user: {
          id: result[0].id,
          username: result[0].username,
          role: result[0].role,
        }

      })
    })

  }catch(e){
    return res.status(500).json({ status: false, msg: "Lỗi gì đó rồi", err: e.message})
  }
}


const profile = (req, res) => {
  try {
    return res.json({ status: true, user: req.user })

  } catch(err) {
      return res.status(500).json({ error: err.message })
  }
}

const refreshToken = (req,res) => {
  try {
    const token = req.body.token
    if(!token) return res.json({ status: false, msg: "Lỗi token" })
    
    const payload = jwt.verify(token, process.env.JWT_SECRET)

    const accessToken = jwt.sign(
      { id: payload.id, username: payload.username, role: payload.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    )
    return res.json({ status: true, accessToken })
    
  } catch(err) {
      return res.status(500).json({ error: err.message })
  }
}

module.exports = { register, getUsers, login, profile, refreshToken }