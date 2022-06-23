const mongoose = require("mongoose");
// const mongoURI = "mongodb+srv://muzzammil:hDg2jz01v0Bg5UuP@cluster0.hl0eo.mongodb.net/test"

const connectToMongo = ()=>{
    mongoose.connect(`${process.env.MONGO_URI}`, ()=>{
        console.log("connected to mongoDB successfully")
    })
}
module.exports = connectToMongo