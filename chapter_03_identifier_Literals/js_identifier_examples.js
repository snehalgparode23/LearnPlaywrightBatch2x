// JavaScript Identifier Rules - All Examples in One File

// 1. Must start with a letter, underscore, or dollar sign
let name = "valid";
let _private = "valid";
let $price = "valid";

// 2. Cannot start with a digit
// let 2fast = "invalid"; // SyntaxError

// 3. Subsequent characters can be letters, digits, underscores, or dollar signs
let user2 = "valid";
let user_name = "valid";
let user$name = "valid";

// 4. Case-sensitive
let apple = "lowercase";
let Apple = "uppercase";
let APPLE = "all caps";

// 5. Cannot use reserved keywords
// let class = "invalid"; // SyntaxError
// let return = "invalid"; // SyntaxError

// 6. Can contain Unicode letters and digits
let café = "valid";
let 变量 = "valid";
let Π = "valid";

// 7. No spaces or hyphens allowed
// let user name = "invalid"; // SyntaxError
// let user-name = "invalid"; // SyntaxError

// 8. Length is unlimited
let thisIsAVeryLongIdentifierNameThatIsStillValid = "valid";

// 9. Can use Unicode escape sequences
let \u0041pple = "valid"; // \u0041 is 'A'

// Examples Summary
console.log(name);          // valid
console.log(_private);      // valid
console.log($price);        // valid
console.log(user2);         // valid
console.log(user_name);     // valid
console.log(user$name);     // valid
console.log(apple);         // lowercase
console.log(Apple);         // uppercase
console.log(APPLE);         // all caps
console.log(café);          // valid
console.log(变量);           // valid
console.log(Π);             // valid
console.log(thisIsAVeryLongIdentifierNameThatIsStillValid); // valid
console.log(Apple);         // valid (from unicode escape)
