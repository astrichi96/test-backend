/* 
    In this controller you will find the most important verbs 
    with which the different queries are made, which are 
    responsible for interacting with the database and
    performing different actions on it.
*/
'use strict'
// The model that is related to this driver must be imported
const Provider = require('../models/providers')

/*
    Get, with this verb you can get the provider that is 
    related to the id that is requested
*/
function readByProvider (req, res){
    let providerId = req.params.providerId
    Provider.findById(providerId, (err, provider)=>{
        if(err) return res.status(500).send({ message: `Error making the request: ${err}`})
        if(!provider) return res.status(404).send({ menssage: `The provider does not exist`})

        res.status(200).send({ provider })
    })
}
/*
    Get, with this verb you can obtain the list of providers 
    in general that are stored in the database
*/
function readProviders (req, res){
    Provider.find({}, (err, providers) => {
        if(err) return res.status(500).send({ message: `Error making the request: ${err}`})
        if(!providers) return res.status(404).send({message: 'There are no poviders'})

        res.send(200, { providers })
    })
}

/*
    PUT, with this verb you can edit or modify the provider 
    that relates to the id that is requested
*/
function updateProviders (req, res){
    let providerId = req.params.providerId
    let update = req.body
    Provider.findByIdAndUpdate(providerId, update, (err, providerUpdated) => {
        if(err) res.status(500).send({message: `Error updating provider: ${err}`})
        res.status(200).send({ provider: providerUpdated })
    })
}

/*
    DELETE, with this verb you can delete the provider that is 
    related to the id that is requested
*/
function deleteProvider (req, res){
    let providerId = req.params.providerId

    Provider.findById(providerId, (err, provider) =>{
        if(err) res.status(500).send({message: `Error deleting provider: ${err}`})
        provider.remove(err => {
            if(err) res.status(500).send({message: `Error deleting provider: ${err}`})
            res.status(200).send({ message: 'The provider was successfully eliminated' })
        })
    })
}

/*
    POST, with this verb you can create or add a new provider to the database, 
    first you get the data that is stored in a variable related to the specific 
    scheme or model for this controller and finally it is saved in the database 
    sending as a result the provider that has been created
*/
function createProvider (req, res){
    let provider = new Provider()
    provider.firstName = req.body.firstName
    provider.lastName = req.body.lastName
    provider.middleName = req.body.middleName
    provider.email = req.body.email
    provider.employerId = req.body.employerId
    provider.providerType = req.body.providerType
    provider.staffStatus = req.body.staffStatus
    provider.assignedTo = req.body.assignedTo
    provider.status = req.body.status
    provider.projectedStartDate = req.body.projectedStartDate
    provider.createBy = req.body.createBy
    provider.updateBy = req.body.updateBy
    provider.specialties = req.body.specialties


    provider.save((err,ProviderStored)=>{
        if(err) res.status(500).send({ menssage: 'Error saving the database'})
        res.status(200).send( {provider: ProviderStored })
    })
}

module.exports = {
    readByProvider,
    readProviders,
    updateProviders,
    deleteProvider,
    createProvider
}