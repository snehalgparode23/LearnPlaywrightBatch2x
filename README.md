# Learn Playwright Batch 2X

A learning project for Playwright automation testing with JavaScript fundamentals.

## Structure

| Folder | Content |
|--------|---------|
| `chapter_01_Basics` | JavaScript basics – setup, variables, verification |
| `chapter_02_Javascript_Concepts` | Core JS concepts |
| `chapter_03_identifier_Literals` | Identifiers, naming conventions, comments, and VS Code shortcuts |
| `chapter_04_JavaScript_Concepts` | `let` vs `var` vs `const`, functions, hoisting, scope |
| `chapter_05_Literal` | Literals: numbers, strings, null, undefined, template literals, backticks |
| `chapter_06_Operators` | All JavaScript operators: arithmetic, comparison, logical, ternary, bitwise |
| `chapter_07_If_Else` | Conditional statements: if, else if, else, real-world examples, interview questions |
| `chapter_08_Switch_Statement` | Switch statements, cases, default, grouping, IQ questions |
| `chapter_09_UserInput` | User input handling: readline, prompt-sync, Node.js input |
| `chapter_10_Loops` | Loops: for, while, do-while, for...of, for...in, interview questions |
| `chapter_11_Arrays` | Arrays: creation, access, methods, searching, iteration, transformation |
| `chapter_12_Funtions` | Functions: declaration, types, expressions, arrow functions, template literals |
| `chapter_13_Strings` | String methods cheat sheet – all common JS string operations with examples |
| `chapter_14_Objects` | Objects: creation, properties, methods, destructuring, spread, getters/setters |
| `chapter_15_2D_Array` | 2D Arrays: creation, traversal, nested loops, functions, patterns, real-world examples |
| `chapter_16_Callback` | Callbacks: synchronous, asynchronous, callback hell, Playwright examples, parameters, returns |
| `chapter_17_Promise` | Promises: creation, resolve/reject, real-world API calls, `finally`, `Promise.all`, interview questions |
| `chapter_18_Async_Await` | Async/await: syntax, error handling, sequential & parallel execution, real-world examples, interview questions |
| `chapter_19_Playwright_Basics` | Playwright basics: TypeScript setup, e2e tests, first specs |
| `tests/` | Root-level Playwright TypeScript test specs |
| `e2e/` | Root-level end-to-end Playwright test specs |

## Topics Covered

### Chapter 01 – Basics
- JavaScript setup and verification
- Variables and data types
- Hot code reloading basics

### Chapter 02 – JavaScript Concepts
- Fundamental JavaScript concepts

### Chapter 03 – Identifiers & Literals
- **Identifier rules** – valid names, Unicode, reserved keywords
- **Naming conventions** – `camelCase`, `snake_case`, `PascalCase`, `SCREAMING_SNAKE_CASE`, `flatcase`
- **Comments** – single-line and multi-line usage
- **VS Code Shortcuts** – quick-reference cheat sheets for [Windows](./chapter_03_identifier_Literals/VS_code_Windows_keyboard_shortcut.md) and [Mac](./chapter_03_identifier_Literals/VS_code_Mac_keyboard_shortcut.md)

### Chapter 04 – JavaScript Concepts (Advanced)
- `let`, `var`, and `const` declarations
- Function declarations and scope
- Hoisting behavior
- Block scope vs function scope

### Chapter 05 – Literals
- **Number literals** – integers, floats, binary, octal, hex, exponential, BigInt
- **Special numbers** – `Infinity`, `-Infinity`, `NaN`
- **String literals** – single quotes, double quotes, backticks (template literals)
- **null vs undefined** – differences and when to use each
- **Template literals** – multiline strings, variable interpolation `${var}`
- **Backtick vs single/double** – why backticks are the "superhero" version

### Chapter 06 – Operators
- **Arithmetic operators** – `+`, `-`, `*`, `/`, `%`, `**`
- **Comparison operators** – `==`, `!=`, `===`, `!==`, `>`, `<`, `>=`, `<=`
- **Strict vs loose equality** – `===` vs `==` with examples
- **Logical operators** – `&&`, `||`, `!`
- **String concatenation** – `+` with strings
- **Ternary operator** – `condition ? true : false`
- **Type operators** – `typeof`, `instanceof`
- **Increment / Decrement** – `++`, `--` (pre and post)
- **Nullish coalescing** – `??`
- **Post-increment behavior** – tricky interview questions
- **Advanced operator concepts** – complex expressions

### Chapter 07 – If Else
- **Basic if/else** – conditional branching
- **else if** – multiple conditions
- **Real-world examples** – practical use cases
- **API if/else** – handling API responses
- **Interview questions** – even/odd, grade calculator, leap year
- **Advance tasks** – complex conditional logic

### Chapter 08 – Switch Statement
- **Basic switch** – case matching
- **No break** – fall-through behavior
- **Default case** – fallback handling
- **Real-time examples** – practical switch usage
- **Grouping cases** – multiple cases same result
- **Interview questions** – tricky switch scenarios

### Chapter 09 – User Input
- **User input basics** – reading from command line
- **Node readline** – `readline` module usage
- **Prompt sync** – synchronous user prompts

### Chapter 10 – Loops
- **For loop** – basic loop syntax, initialization, condition, updation
- **For loop variations** – different patterns and use cases
- **For...of / For...in** – iterating over arrays and objects
- **While loop** – condition-based looping
- **Do...while loop** – execute at least once before checking condition
- **Interview questions** – tricky loop scenarios and IQ problems
- **Tasks** – Triangle Classifier, FizzBuzz (`Task_22_May.js`)

### Chapter 11 – Arrays
- **Creating arrays** – array literals, `new Array()`, `Array.of()`, `Array.from()`
- **Accessing elements** – index access, `.at()` for negative indexing
- **Adding / removing elements** – `push`, `pop`, `shift`, `unshift`, `splice`
- **Real-world examples** – browser list manipulation, test result arrays
- **Searching** – `indexOf`, `lastIndexOf`, `includes`, `find`, `findIndex`, `findLast`, `findLastIndex`
- **Iteration** – `for`, `for...of`, `forEach`, `for...in`, `.entries()`
- **Transformation** – `map`, `filter`, `reduce`, `flat`
- **Sorting** – `sort()`, natural vs lexicographic, ascending / descending with comparator
- **Slicing** – `slice(start, end)`, negative indexing
- **Combining & joining** – `concat`, spread operator `...`, `join`
- **Checking arrays** – `Array.isArray`, `every`, `some`

### Chapter 12 – Functions
- **Function basics** – declaration, definition, calling
- **Function types** – no param / no return, with param / no return, no param / with return, with param / with return
- **Function expressions** – assigning functions to variables
- **Arrow functions** – ES6 concise syntax, implicit returns, real-world examples (API status validation)
- **IIFE** – Immediately Invoked Function Expressions
- **Default parameters** – providing fallback values in function signatures
- **Rest parameters** – `...args` to collect variable arguments
- **Spread operator** – expanding arrays into function arguments
- **Scope in functions** – global scope, local scope, nested / block scope
- **Closures** – inner functions retaining access to outer variables, counter example, real-world API retry tracker
- **Higher-order functions** – functions that accept or return other functions
- **Pure functions** – predictable output with no side effects vs impure functions
- **Template literals in functions** – using backticks and `${}` in return values
- **Interview questions** – tricky function scenarios, hoisting behavior with expressions

### Chapter 13 – Strings
- **String cheat sheet** – quick-reference table of all common JavaScript string methods
- **Accessing characters** – `charAt`, `charCodeAt`, `at`, bracket notation
- **Searching & checking** – `indexOf`, `lastIndexOf`, `includes`, `startsWith`, `endsWith`, `search`, `match`, `matchAll`
- **Extracting substrings** – `slice`, `substring`, `substr`, `split`
- **Modifying case** – `toUpperCase`, `toLowerCase`, `toLocaleUpperCase`, `toLocaleLowerCase`
- **Trimming & padding** – `trim`, `trimStart`, `trimEnd`, `padStart`, `padEnd`
- **Replacing content** – `replace`, `replaceAll`
- **Concatenation & repeating** – `concat`, `repeat`
- **Unicode & normalization** – `codePointAt`, `fromCodePoint`, `fromCharCode`, `normalize`
- **Quick reference summary** – categorized method list for fast lookup

### Chapter 14 – Objects
- **Object basics** – creation, properties, key-value pairs, JSON format
- **Object creation methods** – literals, constructors, `Object.create()`
- **Primitive vs reference types** – how objects are stored and compared
- **Real-world examples** – practical object usage scenarios
- **Interview questions** – object comparison, copying, tricky scenarios
- **Object methods** – functions inside objects, `this` keyword
- **Destructuring** – extracting properties, renaming variables, default values, nested destructuring
- **Spread operator** – cloning objects, merging objects
- **Getters & Setters** – computed properties, `get` / `set` syntax
- **Advanced concepts** – `let` / `const` with objects, object mutations

### Chapter 15 – 2D Arrays
- **2D array basics** – grid creation, nested arrays, row-column access
- **Traversal** – nested `for` loops to iterate over rows and columns
- **Real-world examples** – student scores, test suite results
- **Array methods with 2D** – `map`, `reduce`, `filter` on nested arrays
- **Functions with 2D arrays** – passing and returning 2D arrays
- **Pattern problems** – right triangle patterns, interview questions

### Chapter 16 – Callbacks
- **Callback basics** – passing functions as arguments
- **Anonymous callbacks** – inline function expressions
- **Arrow callbacks** – concise callback syntax with `=>`
- **Synchronous callbacks** – immediate execution flow
- **Asynchronous callbacks** – `setTimeout`, delayed execution, event loop basics
- **Callback hell** – nested callback chains, readability issues
- **Playwright callbacks** – real-world testing scenarios with callbacks
- **Callback parameters** – passing data through callback arguments
- **Callback returns** – handling return values from callbacks

### Chapter 17 – Promises
- **Promise basics** – creation with `new Promise`, `resolve`, and `reject`
- **Real-world API promises** – fetching data using promises
- **Promise chaining** – `.then()`, `.catch()`, and `.finally()`
- **`Promise.all`** – running multiple promises in parallel
- **Playwright promise problems** – practical automation scenarios with promises
- **Interview questions** – tricky promise scenarios and edge cases

### Chapter 18 – Async/Await
- **Async/await syntax** – writing asynchronous code that looks synchronous
- **Error handling** – `try...catch` with async functions
- **Sequential execution** – awaiting promises one after another
- **Parallel execution** – `Promise.all` with async/await
- **Real-world examples** – practical API automation with async/await
- **Playwright async DOM** – handling asynchronous DOM operations
- **Interview questions** – common async/await pitfalls and tricky scenarios

### Chapter 19 – Playwright Basics
- **TypeScript setup** – installing TypeScript in the Playwright project
- **Playwright configuration** – `playwright.config.ts` basics
- **E2E test specs** – writing first Playwright tests in TypeScript
- **Root-level tests** – `tests/` and `e2e/` directories with `.spec.ts` files

## Getting Started

1. Clone the repository
2. Open in VS Code
3. Run `.js` files with Node.js to verify output

```bash
node chapter_01_Basics/01_Basics.js
node chapter_05_Literal/26_Literal_Number_all.js
node chapter_05_Literal/29_Backtick_single_double.js
node chapter_06_Operators/30_Operators.js
node chapter_07_If_Else/48_If_Else.js
node chapter_08_Switch_Statement/59_Switch.js
node chapter_09_UserInput/68_User_Input.js
node chapter_10_Loops/71_For_loop.js
node chapter_10_Loops/Task_22_May.js
node chapter_11_Arrays/83_Arrays.js
node chapter_11_Arrays/89_Searching.js
node chapter_11_Arrays/91_Transform_Array.js
node chapter_11_Arrays/92_Arrays.js
node chapter_11_Arrays/93_Array_Slicing.js
node chapter_11_Arrays/94_Concat_array.js
node chapter_11_Arrays/95_Array_Checking.js
node chapter_12_Funtions/96_Functions.js
node chapter_12_Funtions/103_Arrow_Fn.js
node chapter_12_Funtions/104_Arrow_Fn_REAL.js
node chapter_12_Funtions/105_IIFE.js
node chapter_12_Funtions/106_Default_Param_Fn.js
node chapter_12_Funtions/108_Rest_Param_Fn.js
node chapter_12_Funtions/110_Spead_IQ.js
node chapter_12_Funtions/113_Closure.js
node chapter_12_Funtions/115_API_REAL_Closure.js
node chapter_12_Funtions/116_Higher_Order_Fn.js
node chapter_12_Funtions/117_Pure_Fn.js
node chapter_14_Objects/124_Objects.js
node chapter_14_Objects/125_Object2.js
node chapter_14_Objects/126_Object_Creations.js
node chapter_14_Objects/127_Objects_Real.js
node chapter_14_Objects/128_Primitive_Ref.js
node chapter_14_Objects/129_Ob_Examples.js
node chapter_14_Objects/130_IQ.js
node chapter_14_Objects/131_Object_Fn.js
node chapter_14_Objects/132_Obj_Decon.js
node chapter_14_Objects/133_Spead.js
node chapter_14_Objects/134_Objects_GET_SET_Methods.js
node chapter_14_Objects/135_IQ.js
node chapter_14_Objects/136_Obj_REAL.js
node chapter_14_Objects/137_Let_const_obj.js
node chapter_15_2D_Array/138_2D_Arrays.js
node chapter_15_2D_Array/139_2d.js
node chapter_15_2D_Array/140_REAL.js
node chapter_15_2D_Array/141_2d_Array_Fn.js
node chapter_15_2D_Array/142_IQ_Right_Pattern_Py.js
node chapter_16_Callback/143_Callback.js
node chapter_16_Callback/144_CB.js
node chapter_16_Callback/145_CB_Fn.js
node chapter_16_Callback/146_PW_CB.js
node chapter_16_Callback/147_JS_CB.js
node chapter_16_Callback/148_Sync_CB.js
node chapter_16_Callback/149_Async_CB.js
node chapter_16_Callback/150_CB_Hell.js
node chapter_16_Callback/151_CB_Hell_20_Steps.js
node chapter_16_Callback/152_CB_Parameter.js
node chapter_16_Callback/153_CB_Return.js
node chapter_17_Promise/154_Promise.js
node chapter_17_Promise/155_Promise_REAL_API.js
node chapter_17_Promise/156_Promise_REAL_API_PART2.js
node chapter_17_Promise/157_Finally.js
node chapter_17_Promise/158_Call_Py_Problem.js
node chapter_17_Promise/159_Promise_ALL.js
node chapter_17_Promise/160_Promise_IQ.js
node chapter_18_Async_Await/161_Async.js
node chapter_18_Async_Await/162_Aysnc_P2.js
node chapter_18_Async_Await/163_PyODom.js
node chapter_18_Async_Await/164_Async_Ex.js
node chapter_18_Async_Await/165_AA_Parallel.js
node chapter_18_Async_Await/165_AA_Seq.js
node chapter_18_Async_Await/166_IQ.js
node chapter_18_Async_Await/167_ACLogin.js
```

### Running Playwright Tests

```bash
npx playwright test
npx playwright test --ui
npx playwright test tests/example.spec.ts
npx playwright test e2e/example.spec.ts
```

---

*This repo is for learning purposes – feel free to explore and practice!*
