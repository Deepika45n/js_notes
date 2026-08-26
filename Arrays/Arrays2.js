// const marvelHeroes=[
//     "Iron Man",
//     "Captain America",
//     "Thor",
//     "Hulk",
//     "Black Widow",
//     "Hawkeye"
// ];
// const dcHeroes=[
//     "Superman",
//     "Batman",
//     "Wonder Woman",
//     "Flash"]

// //push
// // marvelHeroes.push(dcHeroes);
// // // console.log(marvelHeroes);
// // // //output: [ 'Iron Man', 'Captain America', 'Thor', 'Hulk', 'Black Widow', 'Hawkeye', [ 'Superman', 'Batman', 'Wonder Woman', '  Flash' ] ]
// // // //concat
// const allHeroes = marvelHeroes.concat(dcHeroes);
// console.log(allHeroes);
// //output: [ 'Iron Man', 'Captain America', 'Thor', 'Hulk', 'Black Widow', 'Hawkeye', [ 'Superman', 'Batman', 'Wonder Woman', 'Flash' ], 'Superman', 'Batman', 'Wonder Woman

// //spread operator-mostly preferred 
// const allHeroes2=[...marvelHeroes,...dcHeroes];
// console.log(allHeroes2);
// //output: [ 'Iron Man', 'Cap tain America', 'Thor', 'Hulk', 'Black Widow', 'Hawkeye', 'Superman', 'Batman', 'Wonder Woman', '    Flash' ]

//flattening an array
const nestedArray=[1,2,[3,4,[5,6,,5,4,6,7,8,9,0]]];
const flattenedArray=nestedArray.flat(Infinity);
console.log(flattenedArray);
//output: [ 1, 2, 3, 4, 5, 6 ,7,8,9,0]
Array.isArray("Deepu")//false
Array.from("Deepu")//[ 'D', 'e', 'e', 'p', 'u' ]
console.log(Array.from({name:"deeps"}));//[undefined] & interesting case

let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1, score2, score3));
//output: [ 100, 200, 300 ]
