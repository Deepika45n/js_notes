//singleton
//const tinderUser = new Object();
const tinderUser = {}
tinderUser.id = "12345";  
tinderUser.name = "John Doe";
tinderUser.isLoggedIn = false;

console.log(tinderUser);

const regularUser = { 
  email: "john@example.com",
  fullName: {
   
      firstName: "John",
      lastName: "Doe"
    }
   
  }

console.log(regularUser);
console.log(regularUser.fullName); // { firstName: 'John', lastName: 'Doe' }

//combine objects
const ob1 = {1:"a",2:"b"};
const ob2 = {3:"c",4:"d"};
const combinedUser = Object.assign({},ob1,ob2);//object.assign(taget,source1,source2) method is used to copy the values of all enumerable own properties from one or more source objects to a target object. It returns the target object.
const obj3={ob1,ob2};
console.log(obj3); // { ob1: { '1': 'a', '2': 'b' }, ob2: { '3': 'c', '4': 'd' } }  

const obj4={...ob1,...ob2};
console.log(obj4); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const user = {
  1: {
    id: 1,
    email: "user@gmail.com"
  },
  2: {
    id: 2,
    email: "user2@gmail.com"
  }
}

  

console.log(user[1].email); // "user@gmail.com" 

Object.keys(user); // ["1"]
Object.values(user); // [{ id: 1, email: "user@gmail.com" }] 
Object.entries(user); // [["1", { id: 1, email: "user@gmail.com" }]] 

console.log(user.hasOwnProperty("1")); // true

const course={
  courseName:"JavaScript",
  price: 299,
  courseInstructor:"John Doe",
  courseDuration:"3 months"
}
//instead of calling  course.courseName, we can use destructuring to extract the values of the properties into variables with the same name as the property names.
const {courseName,price,courseInstructor,courseDuration}=course;
console.log(courseName);


//Json Api  before there were sending data to the server in the form of XML but now we use JSON format to send data to the server. JSON is a lightweight data interchange format that is easy for humans to read and write and easy for machines to parse and generate.
//  JSON stands for JavaScript Object Notation. It is a text format that is completely language independent but uses conventions that are familiar to programmers of the C-family of languages, including C, C++, C#, Java, JavaScript, Perl, Python, and many others.
//  These properties make JSON an ideal data interchange language.

// {
//   "name": "John Doe",
//   "age": 30,
//   "email": "john@example.com"
// }=> this is json format. 
// It is a string representation of an object. 

//it can also be represented as an array of objects.
// //[
// {
  
// },
// {

// }]