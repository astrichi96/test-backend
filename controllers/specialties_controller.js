'use strict'
const Specialtie = require('../models/specialties')

/// read
function readBySpecialties (req, res){
    let specialtieId = req.params.specialtieId

    Specialtie.findById(specialtieId, (err, specialtie)=>{
        if(err) return res.status(500).send({ message: `Error making the request: ${err}`})
        if(!specialtie) return res.status(404).send({ menssage: `This specialty does not exist`})

        res.status(200).send({ specialtie })
    })

}
function readSpecialties (req, res){
    Specialtie.find({}, (err, specialtie) => {
        if(err) return res.status(500).send({ message: `Error making the request: ${err}`})
        if(!specialtie) return res.status(404).send({message: 'There are no specialties'})

        res.send(200, { specialtie })
    })
}

// update
function updateSpecialties (req, res){
    let specialtieId = req.params.specialtieId
    let update = req.body
    Specialtie.findByIdAndUpdate(specialtieId, update, (err, specialtieUpdated) => {
        if(err) res.status(500).send({message: `Error updating the specialty: ${err}`})
        res.status(200).send({ specialtie: specialtieUpdated })
    })
}

//delete
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

//// create
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