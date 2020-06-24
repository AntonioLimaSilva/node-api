const mongoose = require('mongoose')
mongoose.Promise = global.Promise

console.log('Successful database connection...')

const connection = mongoose.connect('mongodb://root:mongo1234@localhost:27017/nodeapidb', {
    auth: { authdb:"admin" }
})

module.exports = connection