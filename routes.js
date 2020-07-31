const express = require('express')
const routes = express.Router()

routes.get('/', (req, res) => {
    res.redirect("layout")
})

routes.get('/instructors', (req, res) => {
    res.render("instructors/index")
})

routes.get('/members', (req, res) => {
    res.render("members/index")
})



module.exports = routes