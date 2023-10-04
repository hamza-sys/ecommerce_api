const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
    },
    brand: {
        type: String,
    },
    quantity: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
    },
    image: {
        type: String,
    }
})

module.exports = mongoose.model('Product', ProductSchema)