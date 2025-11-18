const express = require("express")
const cors = require("cors")
const productRoutes = require("./src/routes/productRoutes.js")
const authRoutes = require("./src/routes/authRoutes.js")

const app = express()
app.use(cors())
app.use(express.json())

app.use("/api/products", productRoutes)
app.use("/api/auth", authRoutes)

const PORT = 3001
app.listen(PORT, () => console.log("Server Running", PORT)) 