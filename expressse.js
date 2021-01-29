const express = require('express')

const port = 700;

const server = express()

server.get('/' ,(req, res)=>{
  console.log("opps")
//   res.json({
//       sucess :true,
//       mess: "this is a json formet"
//   })
res.status(200).json({sucess:true, data:"this is a json fort"})

res.end()
})
server.get('/:id' ,(req, res)=>{
    console.log("opps")
  //   res.json({
  //       sucess :true,
  //       mess: "this is a json formet"
  //   })
  res.status(200).json({sucess:true, data:`this is your view for ${req.params.id}`})
  
  res.end()
  })

server.post('/:id' ,(req, res)=>{
    console.log("opps")
  //   res.json({
  //       sucess :true,
  //       mess: "this is a json formet"
  //   })
  res.status(200).json({sucess:true, data:`this is your view for ${req.params.id}`})
  res.end()
  })

  server.put('/:id' ,(req, res)=>{
    console.log("opps")
  //   res.json({
  //       sucess :true,
  //       mess: "this is a json formet"
  //   })
  res.status(200).json({sucess:true, data:`you are about to edit ${req.params.id}`})
  res.end()
  })

  server.delete('/:id' ,(req, res)=>{
    console.log("opps")
  //   res.json({
  //       sucess :true,
  //       mess: "this is a json formet"
  //   })
  res.status(200).json({sucess:true, data:`you are about to delete  ${req.params.id}`})
  
  res.end()
  })






server.listen(port, function(){
    console.log(`this is my port ${port}`)
})
   