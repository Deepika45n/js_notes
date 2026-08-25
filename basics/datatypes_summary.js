//datatypes are divided based on how it is retrieved and how it is stored

// primitive:7 types 
// String ,numbers,null,Boolean,Symbol,undefined,BigInt

const bigInt=874654515785121n;

// Referrence types:non-primitive
// Arrays,Object(master it),function

const heroes=["Captain America","IronMan","AntMan"];

let myObj={
    name:"Deepika",
    age:21,
}

const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id==anotherId);
const myfunc=function(){
    console.log("hello World");
    
}

console.log(typeof heroes);
console.log(anotherId);





