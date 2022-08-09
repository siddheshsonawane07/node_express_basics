/*
req => middleware => res
Middleware functions are functions that have access to the request object (req), the response object (res), and the next function in the application’s request-response cycle. The next function is a function in the Express router which, when invoked, executes the middleware succeeding the current middleware.
Here the middleware function is logger which we use for keeping a log of http requests
*/
const express = require('express')
const app = express()
const logger = require('./logger')

// app.get('/',logger,(req,res)=>{

//     res.send('Home')
// })

// app.get('/about',logger,(req,res)=>{

//     res.send("About")
// })

app.use(logger)
//this enables the express to use logger function for all the routes without writing them in the app.get command

app.get('/',(req,res)=>{

    res.send('Home')
})

app.get('/about',(req,res)=>{

    res.send("About")
})


app.listen(5000,()=>{
    console.log("server is running on port 5000");
})