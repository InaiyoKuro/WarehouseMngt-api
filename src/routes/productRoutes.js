const express = require("express")
const { getProducts, addProduct, addExample } = require("../controllers/productController.js")

const router = express.Router();

router.get("/", getProducts);
router.post("/", addProduct);
// router.post("/addExample", addExample);

module.exports = router