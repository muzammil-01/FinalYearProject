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
const Arrayupload =  upload.fields([{name:"image",maxCount:1},{name:"documents",maxCount:2}]) 


// router.post('/', upload.single('image'), (req, res) =>{
//     res.send(`${req.file.originalname}`)
// })

router.post('/', Arrayupload , (req, res) =>{
    res.send(req.files)
})


module.exports = router