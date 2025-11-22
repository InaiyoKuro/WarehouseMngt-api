const express = require("express")
const cors = require("cors")
const productRoutes = require("./src/routes/productRoutes.js")
const authRoutes = require("./src/routes/authRoutes.js")
const userRoutes = require("./src/routes/userRoutes.js")

const app = express()
app.use(cors({ credentials: true }))
app.use(express.json())

app.use("/api/products", productRoutes)
app.use("/api/auth", authRoutes)
app.use("/api/user", userRoutes)

const PORT = 3001
app.listen(PORT, () => console.log("Server Running", PORT)) 