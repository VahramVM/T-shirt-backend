const mongooose = require('mongoose')

const Schema = mongooose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
    
})

module.exports = mongooose.model('users', userSchema)