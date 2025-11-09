const express = require("express")
const cors = require("cors")
const productRoutes = require("./src/routes/productRoutes.js")

const app = express()
app.use(cors())
app.use(express.json())

app.use("/api/products", productRoutes)

const PORT = 3001
app.listen(PORT, () => console.log("Server Running", PORT)) 