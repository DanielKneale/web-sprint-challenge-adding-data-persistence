// build your `/api/tasks` router here
const router = require('express').Router()
const Task = require('./model')
const {payload} = require('./middleware')

router.get('/' , async (req, res, next) =>{
    try{
        const data = await Task.get()
        res.json(data)
      }catch(err) {
        next(err)
      }
})

router.post('/',payload, async (req,res) => {
    try{
        const newTask = await Task.create(req.body)
        res.status(201).json(newTask)
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = router;