// Require Packages and Models
const express = require('express')
const fork = express.Router()
const Fork = require('../models/forkModel.js')

// Routes

// Index Recipe
fork.get('/', (req, res) => {
    Fork.find({}, (err, results) => {
        if (err) {res.status(400).json({error: err.message})}
        res.status(200).json({results})
    })
})

// Delete Recipe
fork.delete('/:id', (req, res) => {
    Fork.findByIdAndRemove(req.params.id, (err, recipes) => {
        if (err) {res.status(400).json({error: err.message})}
        res.status(200).json({recipes})
    })
})

// Edit Recipe
fork.put('/:id', (req, res) => {
    Fork.findByIdAndUpdate(req.params.id, {recipes :req.body}, {new: true}, (err, recipes) => {
        if (err) {res.status(400).json({error: err.message})}
        res.status(200).json({recipes})
    })
})


// Export Router
module.exports = fork