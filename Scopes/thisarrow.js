// //window  is the global object in browser
// let user={
//     username:"Deepika",
//     price:999,
//     welcomeMessage:function(){
//         console.log(`${this.username} , welcome to the website`);
//         console.log(this);
        
//     }   
//     }
//  user.welcomeMessage();
//  user.username="sammy"
//   user.welcomeMessage();

 ////console.log(this);=>{}

/********************************************************************** Arrow function******************************************************** */

/* normal function*/
 
// function addOne(num1){
//     return num1+2;

// }


/*
const addTwo=(num1 ,num2)=>{
//     console.log(this);//{}
      console.log(this.num1);//  o/p=undefined == because num1 is a function parameter, not a property of this.
      //In Node.js, top-level this is usually {} (the module object), and it has no num1 propert
    return num1+num2;

}
console.log(addTwo(5,8));
*/


/* if u write {}it is compulsoryy right return
 const addOne=(num1)=>(num1+2);
 console.log(addOne(5));//7
 */

 
// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()
/*
 
const chai=()=>(username = "hitesh",
    console.log(this.username)
)

chai()
const myArray = [2, 5, 3, 7, 8];

myArray.forEach((value) => {
  console.log(value);
});
*/


//immediately invoked function expression (IIFE) with arrow function means -function that is defined and executed immediately after its creation.
//  It is often used to create a new scope and avoid polluting the global namespace.

(() => {
  console.log("This is an IIFE with arrow function");
})();
((name)=>{
  console.log(`hi ${name} welcome to chai aur code`)
  
})(`deepika`);// to end the iife u need to ;



    


