const User = require('../models/User.js')
const Product = require('../models/Product.js')
const Cart = require('../models/Cart.js')


// get single user cart items
const getSingleUserCartItems = async (id) => {
    const cartItems = await Cart.find({user: id}).populate('user product')
    return cartItems
}

// get all cart items
const getCarts = async () => {
    const carts = await Cart.find().populate('user product')
    return carts
}

// get all cart items for a specific user
const createACart = async (cart) => {
    const newCart = new Cart(cart)
    return newCart
}

// update cart
const updateACart = async (id, updatedCartData) => {
    const updatedCart = await Cart.findByIdAndUpdate(id, updatedCartData, {new: true})

    return updatedCart
}

// delete cart
const deleteACart = async (id) => {
    const deletedCart = await Cart.findByIdAndDelete(id)
    return deletedCart
}

module.exports = {
    getCarts,
    createACart,
    updateACart,
    deleteACart,
    getSingleUserCartItems
}