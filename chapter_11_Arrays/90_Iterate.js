//Iterate - go from one element to the next

let tests = ["login", "checkout", "search", "profile"];
for (let i = 0; i < tests.length; i++){
  console.log(tests[i]);
}

console.log("----");

//for----of(cleanest of values)
for (let test of tests){
  console.log(test);
}   

console.log("----");

tests.forEach((test, index) => {
    console.log(test, index);
});

console.log("----");

let students = ["John", "Jane", "Doe"];
for (let student in students){
    console.log(student, "->" ,students[student]);
 } // Output: 0, 1, 2 (indexes)

 console.log("----");

 for([i,tests] of tests.entries()){
    console.log(i, tests);
 }