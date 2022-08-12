require('dotenv').config();
const connectToMongo = require('./db')
const path = require('path')
const express = require("express")
var cors = require('cors') 
connectToMongo();

const app = express()
const PORT = process.env.PORT || 3001


app.use(cors())
app.use(express.json())

app.use('/api/auth', require('./routes/auth'))
app.use('/api/property', require('./routes/addproperty'))
app.use('/api/upload',  require('./routes/uploadRoutes'))

app.use("/public", express.static('public'))

app.get("/",(req,res)=>{
    res.json("server start")
})

app.listen(PORT , ()=>{
    console.log(`app listening at http://localhost:${PORT}`)
})