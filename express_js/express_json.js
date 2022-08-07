const express = require('express');
const app = express()
const {products} = require('../temp/data.js')

app.get('/', (req,res)=>{
    res.send('<h1>Home Page</h1><a href = "/api/products"> Products </a>')
})

app.get('/api/products',(req,res)=>{

    //sending only id,name,image of the product
    const newProducts = products.map((product)=>{
        const {id, name, image} = product
        return {id, name, image}
    })

    res.json(newProducts)
})

//route parameters (placeholder)
app.get('/api/products/:productsID',(req,res)=>{

    //sending only id,name,image of the product
    const {productID} = req.params;

    const singleProduct = products.find((product)=> product.id === Number(productID))
    res.json(singleProduct)
})  

app.all('*',(req,res)=>{
    res.statusCode(404).send("product not found")
})

app.listen(5000,()=>{
    console.log("server is listening on port 5000");
})