const express = require('express')

const port =1000

const server = express()

server.get('/', function(req, res){
 console.log("opps")


//  res.json({
//      sucess :true,
//      mess : "im trying this at home"
//  })
res.status(200).json({sucess:true, data:"im trying this at home"})
 res.end()

})

server.get('/:id', (req, res)=>{
    res.status(200).json({sucess:true, data:`this is for view ${req.params.id}`})
res.end()
})

server.post("/:id", (req, res)=>{
    res.status(200).json({sucess:true, data:`this for view${req.params.id}`})
    res.end()
})
server.put('/:id', (req, res)=>{
    res.status(200).json({sucess:true, data:`you are about to edit ${req.params.id}`})
    res.end()
})
server.delete('/:id', (req,res)=>{
    res.status(200).json({sucess:true, data:`you are about to delete ${req.params.id} `})
})


server.listen(port, function(){
    console.log(`this is server is ${port}`)
})