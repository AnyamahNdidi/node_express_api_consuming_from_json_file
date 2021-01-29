
const http  = require('http')


const port = 900

let student = [

    {
        "company":"ndtech",
        "email":"info@ndtech.com"
    },
    {
        "company":"globalBiz",
        "email":"info@globalBiz.com"
    }
]

const app = http.createServer((req, res)=>{

    console.log("server is ready to use")
    console.log(req.headers.authorization)
    
    let body = []
    req.on("data", (chunk)=>{

        body.push(chunk)
    }).on("end", function(){

        body =  Buffer.concat(body).toString()
        console.log(body)
        const {method, url} = req
        let status = 404;
        let response  = {
            sucesse:false,
            data : null
        };

        if(method === "GET" && url === "/company/api"){

            status =200
            response.sucesse = true
            response.data = student

        }else if (method === "POST" && url === "/company/api"){
            const{company, email} = JSON.parse(body)
            if(!company || !email){
                status =404
                response.sucesse = false;
                response.data = null
            }else{
                student.push({company,email})
                status = 200;
                response.sucesse = true;
                response.data = student

            }

        }
        



        res.writeHead(status, {"Content-type":"application/json"})
        res.write(JSON.stringify(response))
        res.end()

    })


    

    

})

app.listen(port, function(){

    console.log(`this is the  port ${port}`)
})