const express = require('express')
const Property = require ('../models/Property')
const {validationResult } = require('express-validator');
const fetchuser = require('../middleware/fetchuser');
const router = express.Router()
const multer = require('multer')



const storage = multer.diskStorage({
    destination:(req, file, cb)=>{
        cb(null,'public/images' )
    },
    filename:(req,file,cb)=>{
        cb(null, file.originalname)
    },
})

const upload = multer({storage})
const Arrayupload =  upload.fields([{name:"propertyImages",maxCount:100},{name:"propertyDocuments",maxCount:100}]) 




// fetch all properties GET /api/property/allproperties
router.get("/allproperties", async(req,res)=>{
    const properties =await Property.find({property:req.body._id})
    res.json(properties)
})


// add property using route '/api/property/addproperty' Auth required
router.post('/check',fetchuser,Arrayupload, async (req, res) => {
    // if there are errors return bad request and errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const arrPropertyImages = []
        for(let i = 0 ; i< req.files.propertyImages.length; i++){
            arrPropertyImages.push(req.files.propertyImages[i].originalname)
        }
        const arrPropertyDocuments = []
        for(let i = 0 ; i< req.files.propertyDocuments.length; i++){
            arrPropertyDocuments.push(req.files.propertyDocuments[i].originalname)
        }
        addProperty = await Property.create({
            ownerName: req.body.ownerName,
            cloneAddress: req.body.cloneAddress,
            cloneOwner: req.body.cloneOwner,
            numberOfSupplies: req.body.numberOfSupplies,
            propertyAddress: req.body.propertyAddress,
            propertyPrice: req.body.propertyPrice,
            PricePerToken: req.body.PricePerToken,
            propertyImages:arrPropertyImages,
            NumberOfTokenPerWallet:req.body.NumberOfTokenPerWallet,
            propertyDocuments:arrPropertyDocuments,
            beds: req.body.beds,
            baths: req.body.baths,
            size: req.body.size,
            country: req.body.country,
            city: req.body.city,
            postalcode: req.body.postalcode,
            user: req.user.id
        })
        res.json({ addProperty })
    } catch (error) {
        console.error(error.message)
        res.status(500).send("internal server error")
    }
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