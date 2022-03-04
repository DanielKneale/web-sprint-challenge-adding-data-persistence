
const payload = (req,res,next) => {
    const{ project_id, task_description  } = req.body
    if(!project_id){
        res.status(400).json({message: `please provide a project_id`})
    }else if(!task_description){
        res.status(400).json({message: `please provide a task_description  `})
    }else{
        next()
    }
}

module.exports = {
    payload,
}