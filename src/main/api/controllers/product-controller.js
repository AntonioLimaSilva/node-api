const restfull = require('node-restful')
const mongoose = restfull.mongoose

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    status: { type: String, required: true }
})

module.exports = restfull.model('product', productSchema)
