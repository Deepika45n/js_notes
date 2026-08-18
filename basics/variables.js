const accountId=1
let  accMail="deepika@gmail.com"
var accPassword="1234324"
accountCity="bengaluru"

// const-cant be changed
//let-intentionallly locked or fixed;
// no semicolons js is fine
//  accountId=2 not allowed

/*var--scope problem, it is global variable, it can be changed anywhere in the code, so it is not recommended to use var
issue in block scope and function scope, it is not recommended to use var
*/
 accMail="deepa@gmail.com"
accPassword="123432"
accountCity="bengaluru"
let accState
//value is undefined, it is not initialized
console.table([accMail,accPassword,accountCity,accState])