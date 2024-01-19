const {Schema, model} = require('mongoose')

const UserSchema = new Schema({
    email: {
        type:String,
        require: true,
        unique:true
    },
    password: {
        type:String,
        require: true,
    },
    confirmed:{
        type: Boolean,
        default: false
    },
    confirmLink:{
        type:String,
    }

})

module.exports = new model('User', UserSchema)