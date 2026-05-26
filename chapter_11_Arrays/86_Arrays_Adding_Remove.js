let arr = [1,2,3];
console.log(arr); // Output: [1, 2, 3]

//Add to the end of the array
arr.push(4);
console.log(arr); // Output: [1, 2, 3, 4]

//Remove from the end of the array
arr.pop();
console.log(arr); // Output: [1, 2, 3]

arr.push(4,5);
console.log(arr); // Output: [1, 2, 3, 4, 5]

//Add to the beginning of the array
arr.unshift(0);
console.log(arr); // Output: [0, 1, 2, 3, 4, 5]

//Remove from the beginning of the array
arr.shift();
console.log(arr); // Output: [1, 2, 3, 4, 5]    

console.log(arr);
arr.unshift(100);
console.log(arr);  // Output: [100, 1, 2, 3, 4, 5]
arr.shift();
console.log(arr);  // Output: [1, 2, 3, 4, 5]

