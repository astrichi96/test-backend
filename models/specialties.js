'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SpecialtiesSchema = Schema({
    name: String,
    createBy: String,
    updateBy: String
})
module.exports = mongoose.model('Specialties',SpecialtiesSchema)
