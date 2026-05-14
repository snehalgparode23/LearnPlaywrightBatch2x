// ===========================================
// null vs undefined in JavaScript
// ===========================================

/*
  SIMPLE DEFINITIONS:

  undefined  →  "I don't know what this is yet."
               JavaScript automatically gives this value when:
               • A variable is declared but not assigned
               • A function doesn't return anything
               • You try to access a property that doesn't exist

  null       →  "There is intentionally nothing here."
               A developer manually assigns this to say:
               • "This box exists, but it's empty on purpose."
               • "I want to clear out this value."
*/

// -------------------------------------------
// 1. UNDEFINED examples
// -------------------------------------------

// Variable declared but never given a value
let username;
console.log("username:", username);           // undefined

// Function with no return statement
function sayHello() {
    console.log("Hello!");
}
let result = sayHello();
console.log("result:", result);                 // undefined

// Object property that does not exist
let person = { name: "Snehal" };
console.log("person.age:", person.age);         // undefined

// Missing function argument
function greet(message) {
    console.log(message);
}
greet();                                        // undefined


// -------------------------------------------
// 2. NULL examples
// -------------------------------------------

// Developer purposely sets "no value"
let user = null;
console.log("user:", user);                     // null

// Resetting a value later
let selectedProduct = { id: 1, name: "Laptop" };
selectedProduct = null;                         // cleared on purpose
console.log("selectedProduct:", selectedProduct); // null

// Placeholder for something that will be filled later
let serverResponse = null;                      // we will assign real data later


// -------------------------------------------
// 3. KEY DIFFERENCES (type checking)
// -------------------------------------------

console.log(typeof undefined);                  // "undefined"
console.log(typeof null);                       // "object"  ← famous JS bug!

console.log(undefined == null);                 // true   (loose equality)
console.log(undefined === null);                // false  (strict equality)

console.log(undefined + 1);                     // NaN
console.log(null + 1);                          // 1  (null becomes 0 in math)


// -------------------------------------------
// 4. QUICK COMPARISON TABLE
// -------------------------------------------
/*
  | Feature                | undefined          | null                |
  |------------------------|--------------------|---------------------|
  | Meaning                | Not yet assigned   | Intentionally empty |
  | Who sets it?           | JavaScript (auto)  | Developer (manual)  |
  | typeof                 | "undefined"        | "object" (bug)      |
  | == comparison          | true               | true                |
  | === comparison         | false              | false               |
  | Math conversion        | NaN                | 0                   |
*/


// -------------------------------------------
// 5. WHEN TO USE WHAT?
// -------------------------------------------

/*
  Use undefined:
  → Don't use it directly. Let JS handle it.

  Use null:
  → When YOU want to explicitly say "this has no value"
  → Resetting an object / clearing a reference
  → API responses where a field is empty on purpose
*/
