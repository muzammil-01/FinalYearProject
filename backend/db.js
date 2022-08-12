const mongoose = require("mongoose");

const connectToMongo = ()=>{
    mongoose.connect(`mongodb+srv://admin:admin@cluster0.dvh0hwz.mongodb.net/?retryWrites=true&w=majority`, ()=>{
        console.log("connected to mongoDB successfully")
    })
}
module.exports = connectToMongo