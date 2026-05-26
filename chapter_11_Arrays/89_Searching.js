let result = ["pass", "fail", "pass", "error", "fail"];

//indexOf - returns the first index of the specified element, or -1 if not found
result.indexOf("pass"); // Output: 0
result.indexOf("skip");

//lastIndexOf - returns the last index  or -1 if not found
result.lastIndexOf("error"); // Output: 3
result.lastIndexOf("fail"); // Output: 4

//includes - returns true if the array contains the specified element, false otherwise
result.includes("pass"); // Output: true
result.includes("skip"); // Output: false

//find - returns the first element 
let nums = [10, 20, 30, 40, 50];
let r = nums.find(num => num > 25); // 30,40,50
console.log(r); // Output: 30

//findIndex - returns the index of the first element
nums.findIndex(num => num > 25); // 2,3,4

nums.findLast(num => num > 25); // 50
nums.findLastIndex(num => num > 25); // 4

