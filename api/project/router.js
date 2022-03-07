// build your `/api/projects` router here
const router = require('express').Router()
const Project = require('./model')

router.get('/' , async (req, res, next) =>{
    try{
        const data = await Project.get()
        res.json(data)
      }catch(err) {
        next(err)
      }
})

// eslint-disable-next-line no-unused-vars
router.post('/',/*checkpayload*/ async (req,res,next) => {
    try{
        const newProject = await Project.create(req.body)
        res.status(201).json(newProject)
    }catch(err){
        res.status(500).json(err)
    }
})




module.exports = router;