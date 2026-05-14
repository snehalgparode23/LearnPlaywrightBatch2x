// ===========================================
// 26_Literal_Number_all.js
// All Number Types Supported in JavaScript
// ===========================================

/*
  JavaScript has only ONE number type: "number".
  It is a 64-bit floating-point format (IEEE 754).
  There is NO separate int, float, double, or decimal type.
*/

// -------------------------------------------
// 1. INTEGER LITERALS
// -------------------------------------------

let age = 25;           // positive integer
let year = -2024;       // negative integer
let zero = 0;           // zero

console.log("Integer:", age, year, zero);
console.log("typeof age:", typeof age);   // "number"


// -------------------------------------------
// 2. FLOATING-POINT LITERALS (Decimals)
// -------------------------------------------

let price = 99.99;
let temperature = -10.5;
let pi = 3.14159;

console.log("Float:", price, temperature, pi);

// Decimal point without leading digit
let fraction = .5;      // valid, same as 0.5
console.log("fraction:", fraction);


// -------------------------------------------
// 3. BINARY LITERALS (base-2)
//    Prefix: 0b or 0B
// -------------------------------------------

let binary = 0b1010;    // 10 in decimal
let binary2 = 0B1111;   // 15 in decimal

console.log("Binary 0b1010:", binary);    // 10
console.log("Binary 0B1111:", binary2);   // 15


// -------------------------------------------
// 4. OCTAL LITERALS (base-8)
//    Prefix: 0o or 0O
// -------------------------------------------

let octal = 0o17;       // 15 in decimal
let octal2 = 0O10;      // 8 in decimal

console.log("Octal 0o17:", octal);        // 15
console.log("Octal 0O10:", octal2);       // 8


// -------------------------------------------
// 5. HEXADECIMAL LITERALS (base-16)
//    Prefix: 0x or 0X
// -------------------------------------------

let hex = 0xFF;         // 255 in decimal
let hex2 = 0x1A3;       // 419 in decimal
let hexColor = 0xFFFFFF;// white color value

console.log("Hex 0xFF:", hex);            // 255
console.log("Hex 0x1A3:", hex2);          // 419
console.log("Hex 0xFFFFFF:", hexColor);   // 16777215


// -------------------------------------------
// 6. EXPONENTIAL (SCIENTIFIC) NOTATION
// -------------------------------------------

let oneThousand = 1e3;      // 1 × 10³ = 1000
let smallNum = 1e-3;        // 1 × 10⁻³ = 0.001
let bigNum = 2.5e6;         // 2.5 × 10⁶ = 2500000

console.log("1e3:", oneThousand);         // 1000
console.log("1e-3:", smallNum);           // 0.001
console.log("2.5e6:", bigNum);            // 2500000


// -------------------------------------------
// 7. SPECIAL NUMBERS
// -------------------------------------------

// Infinity  →  result of dividing by zero or number too large
let posInfinity = Infinity;
let negInfinity = -Infinity;
let divideByZero = 1 / 0;

console.log("Infinity:", posInfinity);    // Infinity
console.log("-Infinity:", negInfinity);   // -Infinity
console.log("1 / 0:", divideByZero);      // Infinity
console.log("-1 / 0:", -1 / 0);           // -Infinity

// NaN  →  "Not a Number", result of invalid math operation
let notANumber = NaN;
let invalidMath = 0 / 0;
let badParse = Number("hello");

console.log("NaN:", notANumber);          // NaN
console.log("0 / 0:", invalidMath);       // NaN
console.log("Number('hello'):", badParse); // NaN

// Important: NaN is NEVER equal to itself!
console.log("NaN === NaN:", NaN === NaN); // false
console.log("isNaN(NaN):", isNaN(NaN));   // true


// -------------------------------------------
// 8. BIGINT (arbitrary-precision integers)
//    Suffix: n
//    Used for very large integers beyond Number.MAX_SAFE_INTEGER
// -------------------------------------------

let bigIntValue = 9007199254740991n;          // safe limit as BigInt
let hugeNumber = 123456789012345678901234567890n;

console.log("BigInt:", bigIntValue);
console.log("typeof bigIntValue:", typeof bigIntValue); // "bigint"
console.log("Huge BigInt:", hugeNumber);

// BigInt can also be created with BigInt()
let fromNumber = BigInt(100);
console.log("BigInt(100):", fromNumber);


// -------------------------------------------
// 9. NUMBER OBJECT PROPERTIES
// -------------------------------------------

console.log("Number.MAX_VALUE:", Number.MAX_VALUE);             // ~1.8e308
console.log("Number.MIN_VALUE:", Number.MIN_VALUE);             // ~5e-324
console.log("Number.MAX_SAFE_INTEGER:", Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log("Number.MIN_SAFE_INTEGER:", Number.MIN_SAFE_INTEGER); // -9007199254740991
console.log("Number.POSITIVE_INFINITY:", Number.POSITIVE_INFINITY); // Infinity
console.log("Number.NEGATIVE_INFINITY:", Number.NEGATIVE_INFINITY); // -Infinity
console.log("Number.NaN:", Number.NaN);                         // NaN
console.log("Number.EPSILON:", Number.EPSILON);                 // smallest difference between 1 and >1


// -------------------------------------------
// 10. NUMBER METHODS
// -------------------------------------------

let num = 123.456;

console.log("num.toFixed(2):", num.toFixed(2));           // "123.46"
console.log("num.toPrecision(4):", num.toPrecision(4));   // "123.5"
console.log("num.toString():", num.toString());           // "123.456"
console.log("num.toString(2):", num.toString(2));         // binary string
console.log("num.toString(16):", num.toString(16));       // hex string

console.log("Number.isInteger(5):", Number.isInteger(5));       // true
console.log("Number.isInteger(5.5):", Number.isInteger(5.5));   // false

console.log("Number.isFinite(10):", Number.isFinite(10));       // true
console.log("Number.isFinite(Infinity):", Number.isFinite(Infinity)); // false

console.log("Number.isNaN(NaN):", Number.isNaN(NaN));           // true
console.log("Number.isNaN('hello'):", Number.isNaN("hello"));   // false (not a number type)


// -------------------------------------------
// 12. QUICK COMPARISON TABLE
// -------------------------------------------
/*
  | Literal Form        | Example         | Description              |
  |---------------------|-----------------|--------------------------|
  | Integer             | 42              | Whole number             |
  | Float               | 3.14            | Decimal number           |
  | Binary              | 0b1010          | Base-2 number            |
  | Octal               | 0o17            | Base-8 number            |
  | Hexadecimal         | 0xFF            | Base-16 number           |
  | Exponential         | 1e3             | Scientific notation      |
  | Infinity            | Infinity        | Positive infinite value  |
  | -Infinity           | -Infinity       | Negative infinite value  |
  | NaN                 | NaN             | Invalid number result    |
  | BigInt              | 123n            | Arbitrary large integer  |
*/
