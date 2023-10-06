const express = require('express');
const { getAllCartItems, createCart, updateCart, deleteCart, getSingleUserCart } = require('../controllers/cart');
const router = express.Router()

router.get('/', getAllCartItems)
router.get('/:userId', getSingleUserCart)
router.post('/', createCart)
router.put('/:id', updateCart)
router.delete('/:id', deleteCart)


module.exports = router;