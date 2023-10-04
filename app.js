const express = require('express')
const app = express()
require('dotenv').config()

// import database connection
const db = require('./db.js')

db()

// routes
const userRoutes = require('./routes/User.js')

//middleware
app.use(express.json())              // parsing body
app.use(express.static('public'))    // serving static files



app.get('/', (req, res) => {
    res.status(200).json([{"name": "hamza"}, {"name": "ali"}])
})

app.use('/api/users', userRoutes)

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server started on PORT ${PORT}`)
})