//Accessing and Modifying Array Elements
let testResults = ["pass", "fail", "skip"];
console.log(testResults[0]); // Output: "pass"
console.log(testResults[2]); // Output: "skip"
//console.log(testResults[-1]); // Output: undefined 

console.log(testResults.at(-1)); // Output: "skip"
console.log(testResults.at(-2)); // Output: "fail"
console.log(testResults.at(-3)); // Output: "pass"
console.log(testResults.at(-4)); // Output: undefined

//Modifying array elements
testResults[1] = "Blocked";
console.log(testResults); 