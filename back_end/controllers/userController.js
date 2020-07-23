// Require Packages and Models
const express= require('express')
const user = express.Router();
const bcrypt = require('bcrypt')
const Fork = ('../models/forkModel.js')

// Routes

// Create User
user.post('/new', (req, res) => {
    Fork.create(req.body, (err, user) => {
        if (err) {res.status(400).json({error: err.message})}
        res.status(200).json({user})
    })
})


// Export Router
module.exports = user