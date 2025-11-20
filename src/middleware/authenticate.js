const jwt = require("jsonwebtoken")

const authenticate = (req, res, next) => {
  const authHeader = req.headers["authorization"]

  const accessToken = authHeader && authHeader.split(" ")[1]

  if(!accessToken) {
    return res.json({ status: false, msg: "Chưa xác thực"})
  }

  jwt.verify(accessToken, process.env.JWT_SECRET, (err, user) => {
    if(err) return res.json({ status: false, msg: "Token không hợp lệ" })

    req.user = user
    next()
  })

}

module.exports = authenticate