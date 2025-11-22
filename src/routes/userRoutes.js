const express = require("express")
const authenticate = require("../middleware/authenticate")
const authorize = require("../middleware/authorize")
const { profile, getUsers, me } = require("../controllers/userController")

const router = express.Router()

router.get("/me", authenticate, me)
router.get("/profile/:id", authenticate, profile)
router.get("/users", authenticate, authorize(["master"]), getUsers)

module.exports = router