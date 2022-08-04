const express = require('express')
const consign = require('consign')
const port = 5000
const db = require('./config/db')
const mongoose = require('mongoose')

require('./config/mongodb')

app = express()

app.db = db
app.mongoose = mongoose

consign()
    .include('./config/passport.js')
    .then('./config/middlewares.js')
    .then('./api/validation.js')
    .then('./api')
    .then('./schedule')
    .then('./config/routes.js')
    .into(app)

app.listen(port, () => {
    console.log(`Running Backend on port: ${port}...`)
})