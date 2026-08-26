//Array

const fruits = ["Banana", "Orange", "Apple", "Mango"];
//shallow copy
const fruits2 = fruits;
fruits2[0] = "Kiwi";
console.log(fruits);
// //memory-references

// //deep copy
// const fruits3 = [...fruits];
// fruits3[0] = "Pineapple";
// console.log(fruits);
// //memories-copy
// console.log(fruits[0]);

// fruits.push("Lemon");
// console.log(fruits);
// console.log(fruits2);
// //[ 'Kiwi', 'Orange', 'Apple', 'Mango', 'Lemon' ]
// [ 'Kiwi', 'Orange', 'Apple', 'Mango', 'Lemon' ]
// fruits.pop();   

fruits.unshift("Grape");
//console.log(fruits);//[ 'Grape', 'Kiwi', 'Orange', 'Apple', 'Mango' ]

fruits.shift()//[ 'Kiwi', 'Orange', 'Apple', 'Mango' ]

// console.log(fruits.includes("lemon"));//false
// console.log(fruits.indexOf("lemon"));//-1

// console.log(fruits);//[ 'Kiwi', 'Orange', 'Apple', 'Mango' ]

const fruitsCopy=fruits.join();//Kiwi,Orange,Apple,Mango
// console.log(fruitsCopy);
// console.log(fruits);//[ 'Kiwi', 'Orange', 'Apple', 'Mango' ]
// console.log(typeof fruitsCopy);//string

//slice,cplice

console.log("D",fruitsCopy);
const fruitsSlice=fruits.slice(1,3);//[ 'Orange', 'Apple' ]
console.log(fruitsSlice);[ 'Orange', 'Apple' ]
console.log(fruits);//

//slice -doesnt print is not included i  creates copy of array and it does not change the original array
const fruitsSplice=fruits.splice(1,2); //[ 'Orange', 'Apple' ] 
console.log(fruitsSplice);
console.log("C",fruits);//

//last index element is included andit changes array




