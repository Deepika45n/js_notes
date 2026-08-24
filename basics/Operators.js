// Comparison operators return true or false.
alert(2 > 1);  // true
alert(2 == 1); // false
alert(2 != 1); // true

// Strings are compared character by character.
alert('Z' > 'A');       // true
alert('Glow' > 'Glee'); // true
alert('Bee' > 'Be');    // true

// When comparing different types, JavaScript usually converts values to numbers.

// Examples:

alert('2' > 1);   // true: '2' becomes 2
alert('01' == 1); // true: '01' becomes 1

// For boolean values, true becomes 1 and false becomes 0.

alert(true == 1);  // true
alert(false == 0); // true

// Boolean conversion: 0 is falsy, while a non-empty string is truthy.
let a = 0;
alert(Boolean(a)); // false

let b = '0';
alert(Boolean(b)); // true

alert(a == b); // true: loose equality converts both values

// Strict equality (===) checks both value and type without conversion.
alert(0 === false); // false

// null becomes 0 for numeric comparisons, but == treats it specially.
alert(null > 0);  // false
alert(null == 0); // false
alert(null >= 0); // true

// undefined becomes NaN for numeric comparisons; comparisons with NaN are false.
alert(undefined > 0);  // false
alert(undefined < 0);  // false
alert(undefined == 0); // false

// null and undefined are loosely equal only to each other.
alert(null == undefined); // true

// For <, >, <=, and >=: null becomes 0, while undefined becomes NaN.