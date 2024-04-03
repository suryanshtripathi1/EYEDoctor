const mongoose = require('mongoose')
const Schema = mongoose.Schema

const imageSchema = new Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true,},
    imageData: String
})

module.exports = mongoose.model('Image', imageSchema)