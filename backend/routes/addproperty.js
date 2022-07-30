const express = require('express')
const Property = require ('../models/Property')
const { body, validationResult } = require('express-validator');
const fetchuser = require('../middleware/fetchuser');
const router = express.Router()



// add property using route '/api/property/addproperty' Auth required
router.post('/addproperty', fetchuser, [
    body('propertyName').isLength({ min: 3 }),
    body('propertyLocation').isLength({ min: 3 }),
    body('beds').isLength({ min: 1 }),
    body('baths').isLength({ min: 1 }),
    body('size').isLength({ min: 1 }),
    body('country').isLength({ min: 3 }),
    body('city').isLength({ min: 3 }),
    body('postalcode').isLength({ min: 3 }),
    body('streetAddress').isLength({ min: 3 })
], async (req, res) => {
    // if there are errors return bad request and errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        addProperty = await Property.create({
            propertyName: req.body.propertyName,
            propertyLocation: req.body.propertyLocation,
            beds: req.body.beds,
            baths: req.body.baths,
            size: req.body.size,
            country: req.body.country,
            city: req.body.city,
            postalcode: req.body.postalcode,
            streetAddress: req.body.streetAddress,
            user: req.user.id
        })
        res.json({ addProperty })
    } catch (error) {
        console.error(error.message)
        res.status(500).send("internal server error")
    }
}) 

// fetch all properties GET /api/property/allproperties
router.get("/allproperties", async(req,res)=>{
const properties =await Property.find({property:req.body._id})
res.json(properties)
})




// fetch all user specific properties GET /api/property/userproperties
router.get("/userproperties", fetchuser, async(req,res)=>{
    try {
        const use = await Property.find({ user: req.user.id})
        res.json(use)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
    
    
})
// fetch all properties by id GET /api/property/:id
router.get("/:id", async(req, res)=>{
    const property = await Property.findById(req.params.id)
    if(property){
        res.json(property)
    }else{
        res.status(404)
        res.json('Product not found')
    }
})
module.exports = router