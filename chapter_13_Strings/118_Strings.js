// single quotes
let name1 = 'Snehal';

// double quotes
let name2 = "Sakshi";   

let name3 = "Alice";
let msg = `Hello, ${name3}! 2 + 2 = $ {2 + 2}`; // Template literals
console.log(msg);

//Multi-line string
// Multiline
let report = `
  Test: Login
  Status: Pass
  Duration: 320ms
  ds
  das
  das
  das
  d
  asd
  asd
  a
`;

let longstory = `
I want to tell you a very long story 
where we had a lot of students, w
hich we basically have a lot of tests and blah
 blah blah blah blah blah. 
`;

console.log(String(200)); // "200"
// String(true); -> // "true"
//String(null); // "null"
String([1, 2]); // "[1,2]"

// string - data type
// String -> interface( which will help you to create a new strings)