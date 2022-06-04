const express = require('express')
const Property = require ('../models/Property')
const { body, validationResult } = require('express-validator');
const router = express.Router()

/*
{
    "propertyName": "white house",
    "propertyLocation": "malir saudabad",
    "beds": "2",
    "baths": "3",
    "size": "500 sqft",
    "country": "pakistan",
    "city": "karachi",
    "postalcode": "75100",
    "atreetAddress": "model colony sheet # 26"
}
*/ 


// adding property using route '/api/property/addproperty' Auth required
router.post('/addproperty', [
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
            streetAddress: req.body.streetAddress
        })
        res.json({ addProperty })
    } catch (error) {
        console.error(error.message)
        res.status(500).send("internal server error")
    }
}) 
module.exports = router