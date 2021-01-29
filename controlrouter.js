
const fs = require('fs')

const file = JSON.parse(fs.readFileSync(`${__dirname}/data.json`))
exports.edgets = (req, res, next)=>{
    res.status(200).json({
        sucess:true,
        message: `for viwing all status`,
        data:{
            file

        }
    })
    
}

exports.edget = (req, res, next)=>{
    id = req.params.id *1
    Files = file.find(el => el.id === id)
    
    res.status(200).json({
        sucess:true,
        message: `for viewing this ${req.params.id}`
    })
    next()
    
}

exports.edpost= (req, res, next)=>{
    res.status(200).json({
        sucess:true,
        message: `for viewing this ${req.params.id}`
    })
    next()
    
}

exports.edput = (req, res, next)=>{
    res.status(200).json({
        sucess:true,
        message: `for editing ${req.params.id}`
    })
    next()
    
}

exports.eddelete = (req, res, next)=>{
    res.status(200).json({
        sucess:true,
        message: `for deleting ${req.params.id}`
    })
    next()
    
}