//object literals

const mysym=Symbol("Key1");
const JsUser = {
    name: "John",
    "full name": "John Doe",
    age: 30,
    location: "New York",
    email: "john@example.com",
    isLoggedIn: true,
    [mysym]: "Key1",    
   
}

console.log(JsUser.email);
console.log(JsUser["email"]);//preferred way to access object 
//"email" because it is a string and can be used as a key to access the value of the property in the object.

console.log(JsUser[mysym]); // "Key1"
console.log(JsUser["full name"]); // "John Doe"
console.log( typeof JsUser[mysym]); // "symbol"

JsUser.age = 31; // update age
//Object.freeze(JsUser); // freeze the object to prevent further modifications
JsUser.age = 32; // this will not work because the object is frozen 

JsUser. sayHello=function() {
        console.log("Hello, my name is " + this.name);
    }
JsUser.sayHello(); // "Hello, my name is John"




