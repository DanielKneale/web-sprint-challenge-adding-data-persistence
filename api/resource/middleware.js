
const payload = (req,res,next) => {
    const{ resource_name } = req.body
    if(!resource_name ){
        res.status(400).json({message: `please provide a resource_name `})
    }else{
        next()
    }
}

module.exports = {
    payload,
}