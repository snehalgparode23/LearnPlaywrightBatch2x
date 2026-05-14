// ===========================================
// 29_Backtick_single_double.js
// Difference between backtick, single, and double quotes
// ===========================================

/*
  SINGLE EXPLANATION:

  'single' and "double" quotes are IDENTICAL in JavaScript — 
  they create plain text strings with NO special powers.

  `backticks` (template literals) are the SUPERHERO version — 
  they let you:
    1. Embed variables directly inside the string using ${variable}
    2. Write multiline text without \n escape characters
    3. Put any quotes inside without escaping
*/

// -------------------------------------------
// Single & Double Quotes — exactly the same
// -------------------------------------------

let single = 'Hello World';
let double = "Hello World";

console.log(single === double);     // true (identical value)

// Must escape the same quote type inside
let quote1 = 'It\'s a nice day';    // escape single quote
let quote2 = "She said \"Hi\"";    // escape double quote


// -------------------------------------------
// Backticks — the powerful one
// -------------------------------------------

let name = "Snehal";
let age = 25;

// 1. Variable interpolation
let greeting = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(greeting);

// 2. Multiline strings (no \n needed)
let address = `123 Main Street
Pune, Maharashtra
411001`;
console.log(address);

// 3. Any quote type freely used inside
let free = `It's a "wonderful" day!`;
console.log(free);

// 4. Expressions inside ${}
let total = `Price: ${10 * 5} rupees`;
console.log(total);


// -------------------------------------------
// QUICK COMPARISON TABLE
// -------------------------------------------
/*
  | Feature            | 'single' / "double" | `backtick`          |
  |--------------------|---------------------|---------------------|
  | Plain text         | Yes                 | Yes                 |
  | Variable insert    | No                  | Yes  -> ${var}      |
  | Multiline          | No (needs \n)       | Yes  (press Enter)  |
  | Expression inside  | No                  | Yes  -> ${2+2}      |
  | Escape quotes      | Yes                 | No (use freely)     |
*/
