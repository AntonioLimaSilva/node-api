const express = require('express')

const router = (server) => {
    const router = express.Router()
    server.use('/api/v1', router)

    const categoryService = require('../api/services/category-service')
    const productService = require('../api/services/product-service')
    
    categoryService.register(router, '/categories')
    productService.register(router, '/products')
}

module.exports = router