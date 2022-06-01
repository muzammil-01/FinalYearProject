const connectToMongo = require('./db')
const express = require("express")
connectToMongo();
const app = express()
const port = 3001

app.use(express.json())

app.use('/api/auth', require('./routes/auth'))
app.use('/api/addproperty', require('./routes/addproperty'))
app.listen(port , ()=>{
    console.log(`app listening at http://localhost:${port}`)
})