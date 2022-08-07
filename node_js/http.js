/*
A protocol is system of rules that we define how data is exchanged within or between computers.

HTTP is a protocol for fetching resources such as HTML documents. It is the foundation of any data exchange on the Web and it is a client-server protocol, which means requests are initiated by the recipient, usually the Web browser. A complete document is reconstructed from the different sub-documents fetched, for instance, text, layout description, images, videos, scripts, and more.
The messages sent by the client, usually a Web browser, are called requests and the messages sent by the server as an answer are called responses.

https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview
*/

const http = require('http');
// import { createServer } from 'http';


const server = createServer((req,res)=>{

    if(req.url === '/'){
        res.end("Welcome to our home page")
    }
    
    if(req.url === '/about'){
        res.end("Welcome to our about page")
    }
    

})

server.listen(5000)