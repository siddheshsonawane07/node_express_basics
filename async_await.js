let stocks = {
    Fruits: ['strawberry', 'grapes', 'banana','apple'],
    liquid: ['water','ice'],
    holder: ['cone','cup','stick'],
    toppings: ['chocolate','peanuts']
};

let is_shop_open = true;

// let is_shop_open = false;

let toppings_choice =()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve
            (
                console.log("which topping would you love (task 4) ")
            )
        },3000);
    }); 
}


async function kitchen(){
    console.log("Task 1");
    console.log("Task 2");
    console.log("Task 3");
    await toppings_choice();
    console.log("Task 5");
    console.log("Task 6");
}

kitchen();
console.log("Task 7");
console.log("Task 8");
console.log("Task 9");
console.log("Task 10");