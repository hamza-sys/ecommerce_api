const express = require('express');
const router = express.Router()

// import controllers
const {getAllUsers, createUser, updateUser, deleteUser} = require('../controllers/User.js')

router.get('/', getAllUsers)
router.post('/', createUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)


module.exports = router;