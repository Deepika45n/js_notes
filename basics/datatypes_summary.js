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

//primitive(stack-> u will get copy)
//non-prmitive(refference)

let str = "Hello";

let str1=str;
console.log(str1);
str1="hello world";
console.log(str);
console.log(str1);

let user={
    name:"deepika",
    age:20,
}
console.log(user.name);
console.log(user.age);


let user2=user
user2.name="deepa"

console.log(user2.name);
console.log(user2.age);
console.log(user.name);
console.log(user.age);

// deepika
// 20
// deepa
// 20
// deepa
// 20  values changes in both obj becoz it refer to same memory
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;

//istead of  console.log(str2 + phrase)

console.log(`${str1} and  ${str2}`);//hello world and  Single quotes are ok too








