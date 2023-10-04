const User = require("../models/User.js");

// get All Users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};

// create new user
const createUser = async (req, res) => {
  const { username, firstName, lastName, email, password, phone, address } =
    req.body;

  if (
    !username ||
    !firstName ||
    !lastName ||
    !email ||
    !password ||
    !phone ||
    !address
  ) {
    return res.status(400).json({ message: "data missing..." });
  }

  try {
    const user = new User({
      username,
      firstName,
      lastName,
      email,
      password,
      phone,
      address,
    });

    await user.save();

    return res.status(201).json(user);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};


// update a user
const updateUser = async (req, res) => {
    const {id} = req.params;

    const updatedUserData = req.body;

    try {
        const updatedUser = await User.findByIdAndUpdate(id, updatedUserData, {new: true})

        if (!updatedUser) return res.status(400).send('invalid id')

        return res.status(200).json(updatedUser)

    }catch(err){
        console.log(err)
        res.status(500).send('Server Error')
    }
}

// delete a user
const deleteUser = async (req, res) => {
    const {id} = req.params;

    try {
        const deletedUser = await User.findByIdAndDelete(id)
        console.log(deletedUser)
        if (!deletedUser) return res.status(400).send('Invalid id')

        return res.status(200).json({deletedUser, message: "user deleted successfully"})
    }catch(err){
        console.log(err)
        res.status(500).send('Server Error')
    }
}

module.exports = {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser
};
