//req => middleware => res

const express = require('express')
const app = express()


app.get('/',logger,(req,res)=>{

    res.send('Home')
})

app.get('/about',logger,(req,res)=>{

})



app.listen(5000,()=>{
    console.log("server is running on port 5000");
})