const express = require('express');
const { getAllOrders, getSingleUserOrders, createOrder, updateOrder } = require('../controllers/order');
const router = express.Router()

router.get('/', getAllOrders)
router.get('/:userId', getSingleUserOrders)
router.post('/', createOrder)
router.put('/:orderId', updateOrder)

module.exports = router;