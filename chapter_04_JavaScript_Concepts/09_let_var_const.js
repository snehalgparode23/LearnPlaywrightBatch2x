var v=10;
let l="Hello";
const c=3.14;

var browser="Chrome";
var browser="Firefox"; // var allows redeclaration
browser="Edge"; // var allows reassignment

// for, functions

var testCases = ["login", "logout", "signup"];

for (var i = 0; i < testCases.length; i++) {
    console.log("Running test:", testCases[i]);
}

console.log("Loop counter leaked outside:", i);



console.log("Hi");
console.log("Hi");
console.log("Hi");

function say() {
    console.log("Hi from Function");
}


say();
say();