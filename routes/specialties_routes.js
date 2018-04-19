/*
    This file specifies the routes associated with the verbs (GET, POST, UPDATE, DELETE) 
    where the respective queries for specialties will be made
*/
'use strict'

const express = require('express')
const SpecialtiesController = require('../controllers/specialties_controller')
const api = express.Router()
api.get('/specialties', SpecialtiesController.readSpecialties)
api.get('/specialties/:specialtieId', SpecialtiesController.readBySpecialties)
api.post('/specialties', SpecialtiesController.createSpecialties)
api.put('/specialties/:specialtieId', SpecialtiesController.updateSpecialties)
api.delete('/specialties/:specialtieId', SpecialtiesController.deleteSpecialties)

module.exports = api