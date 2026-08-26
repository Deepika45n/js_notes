// const num= new Number(100);

// console.log(num)
// // Number {100}
// // [[Prototype]]
// // : 
// // Number
// // constructor
// // : 
// // ƒ Number()
// // toExponential
// // : 
// // ƒ toExponential()
// // toFixed
// // : 
// // ƒ toFixed()
// // toLocaleString
// // : 
// // ƒ toLocaleString()
// // toPrecision
// // : 
// // ƒ toPrecision()
// // toString
// // : 
// // ƒ toString()
// // valueOf
// // : 
// // ƒ valueOf()
// // [[Prototype]]
// // : 
// // Object
// // [[PrimitiveValue]]
// // : 
// // 0
// // [[PrimitiveValue]]
// // : 
// // 100
// const primitive = 100;
// const objectNumber = new Number(100);

// console.log(typeof primitive);      // "number"
// console.log(typeof objectNumber);   // "object"

// console.log(objectNumber.valueOf()); // 100
// console.log(objectNumber.toString()); // "100"

// const num = new Number(100);

// console.log(num.toFixed(2));  // "100.00"
// console.log(num.valueOf());  // 100

// //Number objects are mainly useful when explicitly converting values:

// const value = Number("123");

// console.log(value);        // 123
// console.log(typeof value); // "number"



// console.log(new Number(100) === 100); // false
// console.log(new Number(100) == 100);  // true
// const num = 1234.5678;

// // Exponential notation
// console.log(num.toExponential(2)); // "1.23e+3"

// // Fixed number of decimal places
// console.log(num.toFixed(2)); // "1234.57"

// // Significant digits
// console.log(num.toPrecision(5)); // "1234.6"

// // Convert to a string with a radix
// console.log(num.toString());    // "1234.5678"
// console.log((255).toString(16)); // "ff"

// // Extract the primitive number
// console.log(num.valueOf()); // 1234.5678

// // Format according to a locale
// console.log(num.toLocaleString("en-IN")); // "1,234.568"

// // Static Number methods
// console.log(Number.isInteger(100));     // true
// console.log(Number.isInteger(10.5));    // false
// console.log(Number.isNaN(NaN));         // true
// console.log(Number.isFinite(100));      // true
// console.log(Number.isSafeInteger(100)); // true

// // Convert a string to a number
// console.log(Number("123.45")); // 123.45

console.log(Math.random());  
  // NaN

  //date

  const now = new Date();
  console.log(now);
  console.log(now.getFullYear());
  console.log(now.toString());

  
  console.log(now.toDateString());
  
  console.log(now.toLocaleString());
  

  console.log(typeof now); // "object"
  let myCreatedDate=new Date(2023,0,23);

//  
let myTimeStamp=Date.now();

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000));
//interpolation

`${myCreatedDate.getDay()}/${myCreatedDate.getMonth()}/${myCreatedDate.getFullYear()}`
newDate.LocaleString('default',{
    weekday:"long",
})