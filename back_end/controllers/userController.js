// Require Packages
const express = require('express')
const user = express.Router();
const bcrypt = require('bcrypt');

// Model
const Fork = require('../models/forkModel.js')

// Routes

// Create User
user.post('/new', (req, res) => {
    Fork.findOne({ userName: req.body.userName }, (err, user) => {
        if (err) { res.status(400).json({ error: err.message }) }
        if (user == null) {
            if (req.body.password == req.body.password2) {
                req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
                delete req.body.password2
                Fork.create(req.body, (err, user) => {
                    if (err) {
                        res.status(400).json({ error: err.message })
                    } else {
                        // req.session.currentUser = user
                        res.status(200).json({user})
                    }
                })
            } else {
                res.status(400).json({'message' : 'Passwords do not match.'})
            }
        } else {
            res.status(403).json({ 'message' : 'User Name is not available.'})
        }
    })
})
// user.post('/new', (req, res) => {
//     Fork.create(req.body, (err, user) => {
//         if (err) {res.status(400).json({error: err.message})}
//         res.status(200).json({user})
//     })
// })


// Export Router
module.exports = user