// build your `/api/resources` router here
const router = require('express').Router()
const Resource = require('./model')

router.get('/' , async (req, res, next) =>{
    try{
        const data = await Resource.get()
        res.json(data)
      }catch(err) {
        next(err)
      }
})

router.post('/',/*checkpayload*/ async (req,res,next) => {
    try{
        const newResource = await Resource.create(req.body)
        res.status(201).json(newResource)
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = router;