function add(a, b) {//a,b =>parameters
    return a + b;
    }
   console.log(add(2, 3)); // 5,273 aaaaare arguments
     console.log(add(2, 3.5)); // 5.5
        console.log(add(2, "3")); // 23
           console.log(add(2,null)); // 2, null becomes 0
           console.log(add(2,undefined))//NaN, undefined becomes NaN
           console.log(add(2,true))//3,true becomes 1
           console.log(add(2,false))//2,false becomes 0
//if u are rerturning value store it.

function loginUserMessage(username){
    if(username === undefined){
        console.log("please enter a username");
        return;
    }
    // if(!username ){
    //     console.log("please enter a username");
    //     return;
    // }
    
    return `${username} just logged in`;
}
console.log(loginUserMessage("John"));
console.log(loginUserMessage());

// //shopping cart example
// function calculateCartPrice(...cart){
//     //rest operator is used to collect all the arguments passed to the function into an array called cart. 
//     // This allows us to pass any number of arguments to the function and access them as an array.
//    return cart

// }

// console.log(calculateCartPrice(20,30,40,50)); // [ 20, 30, 40, 50 ] 

function calculateCartPrice(val1, val2, ...num1){//500,2000 becz 200 stores in val1 and 400 v
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);//output: Username is sam and price is 399
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));

