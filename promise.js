let stocks = {
    Fruits: ['strawberry', 'grapes', 'banana','apple'],
    liquid: ['water','ice'],
    holder: ['cone','cup','stick'],
    toppings: ['chocolate','peanuts']
};

// let is_shop_open = true;

let is_shop_open = false;

let order =(time, work)=>{

    return new Promise((resolve,reject)=>{

        if(is_shop_open){
            setTimeout(()=>{            
                resolve(work());
            },time);
        }
        
        else{
            reject(console.log("Our shop is closed"))
        }
    })
}
order(2000,()=>console.log(`${stocks.Fruits[0]}`))

.then(()=>{
    return order(0,()=>console.log("Production has started"))
})

.then(()=>{
    return order(2000,()=>console.log("the fruit was chopped"))
})

.then(()=>{
    return order(1000,()=>console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was selected`))
})

.then(()=>{
    return order(1000,()=>console.log("started the machine"))
})

.then(()=>{
    return order(1000,()=>console.log(`ice cream placed on ${stocks.holder[0]}`))
})

.then(()=>{
    return order(1000,()=>console.log("ice cream was served"))
})

.catch(()=>{
    console.log("customer left");
})

// .then: this works if the promise is resolved

// .catch: this works if the promise is rejected

// .finally: this works even the function is resolved or rejected

.finally(()=>{console.log("day ended, shop closed")})