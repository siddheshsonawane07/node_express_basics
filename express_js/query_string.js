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
app.get('/api/products/:productID',(req,res)=>{

    //sending only id,name,image of the product
    const {productID} = req.params;

    const singleProduct = products.find((product)=> product.id === Number(productID))

    if(!singleProduct){
        return res.status(404).send("product does not exist")
    }
    
    res.json(singleProduct)
    
})  

app.get('/api/v1/query',(req,res)=>{
    // console.log(req.query);
    //http://localhost:5000/api/v1/query?name=john&id=4

    const {search,limit} = req.query
    let sortedProducts = [...products]

    //http://localhost:5000/api/v1/query?search=a
    //will print data starting with letter a
    if(search){
        sortedProducts =sortedProducts.filter((product)=>{
            return product.name.startsWith(search)
        })
    }

    //http://localhost:5000/api/v1/query?limit=4
    //will limit the data decided by the browser
    if(limit){
        return sortedProducts = sortedProducts.slice(0,Number(limit))
    }
    res.status(200).json(sortedProducts)


    //if there is no element matching
    if(sortedProducts.length < 1){
        return res.status(200).send('no products matched for your search')
    }
})

app.all('*',(req,res)=>{
    res.status(404).send("product not found")
})

app.listen(5000,()=>{
    console.log("server is listening on port 5000");
})