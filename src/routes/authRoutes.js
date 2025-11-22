const express = require("express")
const { register, getUsers, login, refreshToken } = require("../controllers/authController")
const authenticate = require("../middleware/authenticate")

const router = express.Router()

router.post("/register", register)
router.post("/login", login)

router.post("/refresh-token", refreshToken)

module.exports = router