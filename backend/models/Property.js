const mongoose = require('mongoose')
const { Schema } = mongoose


const PropertyDetailsSchema = new Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    ownerName: {
        type: String,
        required: true,
    },
    cloneAddress: {
        type: String,
    },
    cloneOwner: {
        type: String,
    },
    numberOfSupplies: {
        type: String,
        required: true
    },
    propertyAddress: {
        type: String,
        required: true,
    },
    propertyPrice: {
        type: String,
        required: true
    },
    PricePerToken:{
        type:String,
    },
    propertyImages:{
        type:Array,
        required:true
    },
    NumberOfTokenPerWallet:{
        type:String,
        required:true,
    },
    propertyDocuments:{
        type:Array,
        required:true,
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
    date: {
        type: Date,
        default: Date.now
    }
})
module.exports = mongoose.model('property', PropertyDetailsSchema)