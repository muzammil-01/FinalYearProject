const express = require('express')
const User = require('../models/User')
const router = express.Router()
const multer = require('multer')
const bcrypt = require('bcryptjs')
const fetchuser = require('../middleware/fetchuser')
var jwt = require('jsonwebtoken')

const JWT_SECRET = "Mynameismuzammil"



// create user using route '/api/auth/createuser' no Auth required
router.post('/register' ,async (req, res) => {
    const { name, email, password} = req.body
    const userExists = await User.findOne({ email })

    if (userExists) {
        return res.status(400).send("Email already exists");
    }
    const salt = await bcrypt.genSalt(10)
    secPass = await bcrypt.hash(password, salt)
    const user = await User.create({
        name,
        email,
        password: secPass,
    })
    const data = {
        user: {
            id: user.id
        }
    }
    const authToken = jwt.sign(data, JWT_SECRET)


    if (user) {
        res.status(201).json({
            name: user.name,
            email: user.email,
            id:user.id,
            authToken
        })
    }
    else {
        res.status(400)
        throw new Error('invalid user data')
    }
})



// Login user using route '/api/auth/login' no Auth required
router.post('/login', async (req, res) => {

    try {


        const { email, password } = req.body;
        let user = await User.findOne({ email })
        if (!user) {
            return res.status(400).send("invalid email")
        }
        let comparePassword = await bcrypt.compare(password, user.password)
        if (!comparePassword) {
            return res.status(400).send("invalid password")
        }
        const data = {
            user: {
                id: user.id
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET)
        res.json({
            name: user.name,
            email: user.email,
            id:user.id,
            authToken
        })
    } catch (error) {
        console.error(error.message)
        res.status(500).send("internal server error")
    }

})


// getuser details using route '/api/auth/getuser' Auth required
router.post('/getuser', fetchuser, async (req, res) => {
    try {
        userId = req.user.id
        const user = await User.findById(userId).select("-password")
        res.send(user)
    } catch (error) {
        console.error(error.message)
        res.status(500).send("internal server error")
    }
})

module.exports = router