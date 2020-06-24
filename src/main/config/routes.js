const express = require('express')

const router = (server) => {
    const router = express.Router()
    server.use('/api/v1', router)

    const categoryService = require('../api/services/category-service')
    categoryService.register(router, '/categories')
}

module.exports = router