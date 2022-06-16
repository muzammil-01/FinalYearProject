const express = require('express')
const User = require('../models/User')
const router = express.Router()
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs')
const fetchuser = require('../middleware/fetchuser')
var jwt = require('jsonwebtoken')

const JWT_SECRET = "Mynameismuzammil"

// create user using route '/api/auth/createuser' no Auth required
router.post('/register', [
    body('name', "enter a valid name").isLength({ min: 3 }),
    body('email', "enter a valid email").isEmail(),
    body('password', "password must be atleast 5 characters").isLength({ min: 5 }),
], async (req, res) => {
    let success = false;
    // if there are errors return bad request and errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success, errors: errors.array() });
    }
    // check whether the user with this email already exist 
    try {


        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({success, error: "Sorry a user with this email already exists" })
        }
        const salt = await bcrypt.genSalt(10)
        secPass = await bcrypt.hash(req.body.password, salt)
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass,

        })
        const data = {
            user: {
                id: user.id
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET)
        success = true

        res.json({success,authToken })
    } catch (error) {
        console.error(error.message)
        res.status(500).send("internal server error")
    }
})



// Login user using route '/api/auth/login' no Auth required
router.post('/login', [
    body('email', "enter a valid email").isEmail(),
    body('password', "password can not be empty").exists()
], async (req, res) => {
    let success = false;
    // if there are errors return bad request and errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {


        const { email, password } = req.body;
        let user = await User.findOne({ email })
        if (!user) {
            success = false;
            return res.status(400).json({ error: "please login with valid credentials" })
        }
        let comparePassword = await bcrypt.compare(password, user.password)
        if (!comparePassword) {
            success = false;
            return res.status(400).json({ success,error: "please login with valid credentials" })
        }
        const data = {
            user: {
                id: user.id
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET)
        success = true;
        res.json({success, authToken })
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