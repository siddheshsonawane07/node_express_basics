//ascynchrnous

// console.log(" I ");
// console.log(" eat ");
// setTimeout(()=>{console.log(" ice cream");},3000)
// console.log(" with a");
// console.log(" spoon ");

//callbacks
//calling a function inside another function

// function one(call_two){
//     console.log("Step 1");
//     call_two();
// }

// function two(){
//     console.log("Step 2");
// }

// one(two);

let stocks = {
    Fruits: ['strawberry', 'grapes', 'banana','apple'],
    liquid: ['water','ice'],
    holder: ['cone','cup','stick'],
    toppings: ['chocolate','peanuts']
};

let order = (Fruit_name,call_production)=>{
    setTimeout(()=>{
        console.log(`${stocks.Fruits[Fruit_name]} was selected`);
        call_production();

    },2000);

}

let production = ()=>{
    setTimeout(()=>{
        console.log("production has started");

        setTimeout(()=>{
        console.log("the fruit has been chopped");
        
            setTimeout(()=>{
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);

                    setTimeout(()=>{
                        console.log("chocolate toppings was added");

                        setTimeout(()=>{
                            console.log("ice-cream was served");
                        },1000);
                    },1000);
            },1000);
        },2000);
    },0000);


};

order(0,production)