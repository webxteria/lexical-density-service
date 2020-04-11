
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const wordSchema = new Schema({
    term: {
        type: String,
        required: true,
        unique: true,
    },
    created_at: {
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model('Word', wordSchema)

