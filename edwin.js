const { ftruncate, futimesSync } = require('fs');
const http =  require('http');

const port = 600
const stuinfo = [

    {id:2,  name:"peter", classn:"node"},
    {id:2,  name:"ubani", classn:"python"},
    {id:2,  name:"ndidi", classn:"javascript"}

]

const app = http.createServer(function(req, res){
    console.log('server is ready')
    console.log(req.headers.authorization)
    

    let body = []
    
    req.on("data", (chunk)=>{
        body.push(chunk)
    }).on("end", ()=>{

        let status =404
        let response ={
            sucess :false,
            data:null
        }
        body = Buffer.concat(body).toString()
        console.log(body)
        

        if(req.method === "GET" &&  req.url === "/instructor/api"){

            status = 200;
            response.sucess = true;
            response.data = stuinfo
        
        } else if(req.method === "POST" &&  req.url === "/instructor/api"){
            const {id, name, classn} = JSON.parse(body)
            if(!id || !name || !classn){
                status = 404;
                response.sucess = false;
                response.data = null;
                error ="please put in value"
            }else{
                stuinfo.push(id, name, classn)
                status = 200;
                response.sucess = true;
                response.data =  stuinfo
            }

        }


        
        res.writeHead(status, {"Content-type": "application/json"})
        res.write(JSON.stringify(response))
        res.end()
    })
    

    
})

app.listen(port, function(){

    console.log(`this is the port ${port}`)

})