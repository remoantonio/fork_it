// Require Packages
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
    Fork.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, recipes) => {
        if (err) {res.status(400).json({error: err.message})}
        res.status(200).json({recipes})
    })
})

// Create Recipe
fork.post('/', (req, res) => {
    Fork.create(req.body, (err, recipe) => {
        if (err) {res.status(400).json({error: err.message})}
        res.status(200).json({recipe})
    })
})

module.exports = fork