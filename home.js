const http = require('http')

const port = 700

const comInfo = [

    {
        "company":"ndtech",
        "email":"info@ndtech.com"
    },
    {
        "company":"globalBiz",
        "email":"info@globalBiz.com"
    }
]

const server= http.createServer(function(req, res){
    console.log('the server is ready to use')
    console.log(req.headers.authorization)
    res.writeHead(port, {"Content-Type":"application/json"})
    let body =[]

    // req.on("data", function(chunk){
    //     body.push(chunk);
    // }).on("end",function(){
      
    //     body = Buffer.concat(body).toString();
    //     console.log(body)

    // })

    res.write(
        JSON.stringify({
            sucess:true,
            data:comInfo
        })
    )
    res.end()

});

server.listen(port, function(){
    console.log(`this is the port im using`)
})