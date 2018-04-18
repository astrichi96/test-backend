'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const api_specialties = require('./routes/specialties_routes')
const api_providers = require('./routes/providers_routes')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(api_specialties)
app.use(api_providers)

module.exports = app