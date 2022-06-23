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


router.post('/', upload.single('image'), (req, res) =>{
    res.send(`${req.file.originalname}`)
})

module.exports = router