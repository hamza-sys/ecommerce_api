const mongoose = require('mongoose');

async function connectDB(){
    try {
        await mongoose.connect('mongodb://localhost:27017/ecommerce')
        console.log('database connected...')
    }catch(err){
        console.log(err.message)
    }
}

module.exports = connectDB;