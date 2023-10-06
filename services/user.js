const User = require("../models/User")

// get a specific user
const getSingleUser = async (id) => {
     const user = await User.findById(id)
     return user
}


// get all users
const getUsers = async () => {
  const users = await User.find();
  return users;
}

// create user
const createAUser = async (user) => {
  const newUser = new User(user);
    return newUser;
}

// update user
const updateAUser = async (id, updatedUserData) => {
     const updatedUser = await User.findByIdAndUpdate(id, updatedUserData, {new: true})
     return updatedUser
}

// delete user
const deleteAUser = async (id) => {
     const deletedUser = await User.findByIdAndDelete(id)
     return deletedUser
}


module.exports = {
    getUsers,
    createAUser,
    updateAUser,
    deleteAUser,
    getSingleUser
}