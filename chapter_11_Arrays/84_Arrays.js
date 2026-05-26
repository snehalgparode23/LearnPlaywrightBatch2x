//Creating Arrays //Array literals(prefered)
let browser = ["chrome", "firefox", "safari", "edge"];

//Array constructor
let scores = new Array(3); // Creates an array with 3 empty slots (undefined values)
scores[0] = 85;
scores[1] = 90;
scores[2] = 78;

let scores2 = new Array(1,2,3);
console.log(scores);
console.log(scores2);

let numbers = new Array(100,200,300,400); //0-3: 4
console.log(numbers);

let test = Array.of(1,2,3,4,5);
console.log(test);

//Array.from
let charArray = Array.from("hello");
console.log(charArray); 
// Output: ['h', 'e', 'l', 'l', 'o']

//let num = Array.from("123456789");
//console.log(num);
