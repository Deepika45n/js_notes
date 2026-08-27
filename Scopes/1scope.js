// let a=10
// const b =12
// var c=13
// console.log(a);//10
// console.log(b);//12
// console.log(c);1113
// //scope{}

/*
global scope outside block
//block scope-{inside }*/


if(true){
let a=10
const b =12
var c=13
}//block scope{}

// console.log(a);
// console.log(b);
console.log(c);//13
//var has scope problem  so we dont use it
/*/workspaces/js_notes/Scopes/1scope.js:13
console.log(a);
            ^
            &b is also not defined

ReferenceError: a is not defined*/

let a=300;
 if(1){
    let a=10;
    console.log("inner=" + a);
    
 }
 //a=100 default var
   console.log("outer=" + a);
   //global scope is different in  browser console and node js or ide
   