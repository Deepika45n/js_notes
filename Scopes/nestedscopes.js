// function  one(){
//     const username="Deepika"
//     function two(){
//         const website='youtube'
//         console.log(username);//valid
        
//     }
//     console.log(website);//not valid accessing outsode scope

//     two()
// }
// one()
//child can access parent but parent cant access child

//hoisting problem
// //this works
// function addone(num){
//     return num+1;
// }
// addone(5);

// const addTwo=function(num){
//     return num+2;
// }
// addTwo(9);

//this
console.log(addone(3));

function addone(num){
    return num+1;
}
addTwo(9);//eferenceError: Cannot access 'addTwo' before initialization,becaause addTwo stores value returned
const addTwo=function(num){
    return num+2;
}


