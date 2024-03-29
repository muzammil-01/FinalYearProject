const mongoose = require('mongoose')
const { Schema } = mongoose


const ListingTokens = new Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    propertyId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'property'
    },
    SellerWalletAddress:{
        type: String,
        required: true
    },
    TotalSupplies: {
        type: String,
        required: true
    },
    PricePerToken:{
        type:String,
    },
    NumberOfTokenPerWallet:{
        type:String,
        required:true,
    },
    date: {
        type: Date,
        default: Date.now
    },
  
})
module.exports = mongoose.model('listingTokens', ListingTokens)
