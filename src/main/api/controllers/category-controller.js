const restful = require('node-restful')
const mongoose = restful.mongoose

const categorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    cretedAt: { type: Date, default: Date.now }
})

module.exports = restful.model('category', categorySchema)
