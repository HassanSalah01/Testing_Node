const http = require('http');
const port  = 3000;
const server = http.createServer((req,res)=>{
    if(req.url =="/"){
        res.statusCode=200;
        res.write("welcome To home page");
        res.end()
    }else if (req.url =="/test"){
        res.statusCode=200;
        res.write("welcome To test pages")
        res.end();
    }else{
        res.statusCode=404;
        res.write("PAGE NOT FOUND");
        res.end();
    }
})

server.listen(port,()=>{console.log("server is running ")});