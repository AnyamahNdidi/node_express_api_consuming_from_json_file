const express = require('express')

const port =250

const server = express()

const edroute =require('./route')

server.use('/edwin/api/v1', edroute)

server.listen(port, ()=>{
    console.log(`this is my port ${port}`)
})