const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  phone: {
    type: String
  },
  address: {
    type: String
  },
  profilePicture: {
    type: String,
    default: 'profile_images/profile.jpeg'
  },
  isAdmin: {
    type: Boolean,
    default: false
  }
})

module.exports = mongoose.model('User', userSchema)