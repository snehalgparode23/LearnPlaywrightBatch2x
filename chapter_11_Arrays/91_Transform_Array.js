let score = [45, 70, 55, 98, 80];

// map - transform every element, return a new arrays
// A map will always return the same number of elements that you have, 
// but based on the condition, their values will be changed. 
let grade = score.map(s => s > 60 ? "Pass" : "Fail");
console.log(grade); 
// Output: ["Fail", "Pass", "Fail", "Pass", "Pass"]

// filter - return a new array with only the elements that satisfy the condition
let passing = score.filter(s=> s > 60);
console.log(passing);
// Output: [70, 98, 80]

// reduce - combine all elements into a single value
let total = score.reduce((a , b) => a + b , 0);
console.log(total); // Output: 348

//flat - flatten nested arrays into a single array
let nested = [[1, 2], [3, 4], [5]];
console.log(nested.flat()); // Output: [1, 2, 3, 4, 5]