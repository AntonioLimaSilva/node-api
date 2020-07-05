const product = require('../controllers/product-controller')

product.methods(['get', 'post', 'put', 'delete'])
product.updateOptions({ new: true, runValidators: true })

module.exports = product
