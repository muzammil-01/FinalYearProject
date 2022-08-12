const path = require('path')
const express = require('express')
const multer = require('multer')
const router = express.Router()

const storage = multer.diskStorage({
    destination:(req, file, cb)=>{
        cb(null,'public/images' )
    },
    filename:(req,file,cb)=>{
        cb(null, file.originalname)
    },
})

const upload = multer({storage})
const imageArray = upload.fields([{name:"profileImage",maxCount:1},{name:"profileDoc",maxCount:1}])

router.post('/', imageArray , (req, res) =>{
    try{
        res.status(200).send("images have been saved successfuly")
    }catch(e){
        return res.send(e)
    }
    
})

module.exports = router