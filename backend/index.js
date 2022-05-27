const express = require('express')
const consign = require('consign')
const port = 5000
const db = require('./config/db')

app = express()

app.db = db

consign()
    .then('./config/middlewares.js')
    .then('/api/validation.js')
    .then('/api')
    .then('./config/routes.js')
    .into(app)

app.listen(port, () => {
    console.log(`Running Backend on port: ${port}...`)
})