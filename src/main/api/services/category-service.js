const category = require('../controllers/category-controller')

category.methods(['get', 'post', 'put', 'delete'])
category.updateOptions({ new: true, runValidators: true })

module.exports = category