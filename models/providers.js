/*
    In this model, it represents the attributes of the providers 
    that are stored in the database
*/
'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProviderSchema = Schema({
    firstName: String,
    lastName: String,
    middleName: String,
    email: String,
    employerId: Number,
    providerType: String,
    staffStatus: String,
    assignedTo: Number,
    status: String,
    projectedStartDate: Date,
    createBy: Number,
    updateBy: Number,
    specialties: { type: Schema.ObjectId, ref: "Specialties" } 
})

module.exports = mongoose.model('Provider',ProviderSchema)

