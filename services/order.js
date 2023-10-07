const Order = require('../models/Order.js');

// get orders
const getOrders = async () => {
    const orders = await Order.find()
    return orders
}

// create order
const createAOrder = async (order) => {
 const newOrder = new Order(order)
 return newOrder
}

// get all orders of single user
const getAllOrdersOfAUser = async (userId) => {
    const orders = await Order.find({user: userId})
    return orders
}

module.exports = {
    getOrders,
    createAOrder,
    getAllOrdersOfAUser
}