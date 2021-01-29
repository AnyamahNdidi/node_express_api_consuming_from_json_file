const http = require('http');
const { brotliDecompressSync } = require('zlib');

const port = 500;

const stu = [
    {
        "company":"ndtech",
        "email":"info@ndtech.com"
    },
    {
        "company":"globalBiz",
        "email":"info@globalBiz.com"
    }


]

const serevr = http.createServer(function(req, res){

    console.log('server is ready to use')
    
    const {method, url} = req
    console.log(req.headers.authorization)
    let body =[]
    req.on("data", function(chunck){
        body.push(chunck);
    
    }).on("end", function(){

        body = Buffer.concat(body).toString
        console.log(body)
        statuscode = 404
        response = {
            sucess :false,
            data:null
        }


        res.writeHead(statuscode, {'Content-Type':'application/json'})
        res.write(
            JSON.stringify(response)
        )
        res.end()
    })

    
    

});

serevr.listen(port, ()=>{
    console.log(`this is my ${port}`)
})