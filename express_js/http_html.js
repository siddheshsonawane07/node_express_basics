const http = require('http')
const {readFileSync} = require('fs')

const homePage = readFileSync('../temp/home.html')

const aboutPage = readFileSync('../temp/about.html')


const server = http.createServer((req,res)=>{

    const url = req.url

    if(url === '/'){
        res.writeHead('200',{'content-type':'text/html'})
        res.write(homePage)
        res.end()
    }
    else if(url === '/about'){
        res.writeHead('200',{'content-type':'text/html'})
        res.write(aboutPage)
        res.end()
    }
    else{

    }

})


server.listen(4000)