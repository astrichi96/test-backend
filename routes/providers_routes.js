'use strict'

const express = require('express')
const ProviderController = require('../controllers/providers_controller')

const api = express.Router()

api.get('/provider', ProviderController.readProviders)
api.get('/provider/:providerId', ProviderController.readByProvider)
api.post('/provider', ProviderController.createProvider)
api.put('/provider/:providerId', ProviderController.updateProviders)
api.delete('/provider/:providerId', ProviderController.deleteProvider)

module.exports = api