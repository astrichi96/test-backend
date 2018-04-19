/*
    In this controller you will find the most important verbs 
    with which the different queries are made, which are 
    responsible for interacting with the database and
    performing different actions on it.
*/
'use strict'
// The model that is related to this driver must be imported
const Specialtie = require('../models/specialties')

/*
    Get, with this verb you can get the specialty that is 
    related to the id that is requested
*/
function readBySpecialties (req, res){
    let specialtieId = req.params.specialtieId
    Specialtie.findById(specialtieId, (err, specialtie)=>{
        if(err) return res.status(500).send({ message: `Error making the request: ${err}`})
        if(!specialtie) return res.status(404).send({ menssage: `This specialty does not exist`})
        res.status(200).send({ specialtie })
    })
}

/*
    Get, with this verb you can get the list of specialties in general 
    that are stored in the database
*/
function readSpecialties (req, res){
    Specialtie.find({}, (err, specialtie) => {
        if(err) return res.status(500).send({ message: `Error making the request: ${err}`})
        if(!specialtie) return res.status(404).send({message: 'There are no specialties'})
        res.send(200, { specialtie })
    })
}

/*
    PUT, with this verb you can edit or modify the specialty that is 
    related to the id that is requested
*/
function updateSpecialties (req, res){
    let specialtieId = req.params.specialtieId
    let update = req.body
    Specialtie.findByIdAndUpdate(specialtieId, update, (err, specialtieUpdated) => {
        if(err) res.status(500).send({message: `Error updating the specialty: ${err}`})
        res.status(200).send({ specialtie: specialtieUpdated })
    })
}

/*
    DELETE, with this verb you can eliminate the specialty 
    that is related to the id that is requested
*/
function deleteSpecialties (req, res){
    let specialtieId = req.params.specialtieId
    Product.findById(specialtieId, (err, specialtie) =>{
        if(err) res.status(500).send({message: `Error deleting the specialty: ${err}`})
        specialtie.remove(err => {
            if(err) res.status(500).send({message: `Error deleting the specialty: ${err}`})
            res.status(200).send({ message: 'Specialty successfully erased' })
        })
    })
}

/*
    POST, with this verb you can create or add a new specialty to the database, 
    first you get the data that is stored in a variable related to the specific 
    scheme or model for this controller and finally it is saved in the database 
    sending as a result the specialty that has been created
*/
function createSpecialties (req, res){
  
    let specialtie = new Specialtie()
    specialtie.name = req.body.name
    specialtie.createBy = req.body.createBy
    specialtie.updateBy = req.body.updateBy

    specialtie.save((err,specialtieStored)=>{
        if(err) res.status(500).send({ menssage: 'Error saving the database'})
        res.status(200).send( {specialtie: specialtieStored })
    })
}

module.exports = {
    readBySpecialties,
    readSpecialties,
    updateSpecialties,
    deleteSpecialties,
    createSpecialties
}