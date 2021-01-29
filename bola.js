const http =  require('http')
const port = 500

const stuinfo = [

    {id:2,  name:"peter", classn:"node"},
    {id:2,  name:"ubani", classn:"python"},
    {id:2,  name:"ndidi", classn:"javascript"}

]

const app = http.createServer(function(req, res){
    
    console.log('this port is ready to use')
    console.log(req.headers.authorization)
    
    let body =[]

    req.on("data", function(chunk){
        
        body.push(chunk)
    }).on("end", function(){

        body = Buffer.concat(body).toString()
        const{method, url} = req
        let status = 404
        response ={
            sucess : false,
            data:null          
        }

        if (method === "GET" && url === "/codelab/instructor/api"){

            status = 200,
            response.sucess = true,
            response.data = stuinfo

        }
        else if (method == "POST" &&  url === "/codelab/instructor/api"){
            const {id, name, classn}  = JSON.parse(body)
            if(!id || !name || !classn){
                status =404;
                response.sucess = false;
                response.data = null;
                error = "please fill all details"
            }else{
                stuinfo.push({id, name, classn})
                status = 200;
                response.sucess = true;
                response.data = stuinfo;
            }

        }
        
        res.writeHead(status, {'Content-Type':'application/json'})
        res.write(JSON.stringify(response))
        res.end()
})
    })

app.listen(port, function(){
    console.log(`this is my ${port}`)
})