const http = require('http');
   
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('welcome to our home page')
    }
    else if(req.url==='/contact'){
        res.end('Welcome to contact page')
    }
    res.end(`<h1>URL not found!!</h1>
        <p>We cant seem to find the page that ur looking for</p>
        <a href="/"> Back Home </a>
    `)
   
})

server.listen(3200);