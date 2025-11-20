const express = require("express")
const { register, getUsers, login, profile, refreshToken } = require("../controllers/authController")
const authenticate = require("../middleware/authenticate")

const router = express.Router()

router.post("/register", register)
router.post("/login", login)
router.get("/users", authenticate, getUsers)
router.get("/me", authenticate, profile)

router.post("/refresh-token", refreshToken)

module.exports = router