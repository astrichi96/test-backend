/*
    In this model, it represents the attributes of the 
    specialties that are stored in the database
*/

'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SpecialtiesSchema = Schema({
    name: String,
    createBy: String,
    updateBy: String
})
module.exports = mongoose.model('Specialties',SpecialtiesSchema)
