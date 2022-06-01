const mongoose = require('mongoose')


const AddpropertySchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        default: Date.now
    }
})
module.exports = mongoose.model('addProperty', AddpropertySchema)