const express = require('express')
const router = express.Router()

const {getAllProducts, createProduct, updateProduct, deleteProduct} = require('../controllers/product.js')

// get all products
router.get('/', getAllProducts)
router.post('/', createProduct)
router.put('/:id', updateProduct)
router.delete('/:id', deleteProduct)


module.exports = router;