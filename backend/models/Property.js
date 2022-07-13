const mongoose = require('mongoose')
const { Schema } = mongoose


const PropertyDetailsSchema = new Schema({

    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    propertyName: {
        type: String,
        required: true,
    },
    propertyLocation: {
        type: String,
        required: true,
    },
    beds: {
        type: String,
        required: true,
    },
    baths: {
        type: String,
        required: true,
    },
    size: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    postalcode: {
        type: String,
        required: true,
    },
    streetAddress: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    }
})
module.exports = mongoose.model('property', PropertyDetailsSchema)