/*let a = 10;
console.log(a++ + a); // 21
console.log(a); // 11


let a = 10;
console.log(a++ + ++a);
console.log(a);


let a = 10;
console.log(++a + ++a);
console.log(a);
*/

let a = 5; 
console.log(a++ + ++a - --a + a-- + ++a); 
// Explanation:
// a++ -> 5 (then a becomes 6)
// ++a -> 7 (a becomes 7)
// --a -> 6 (a becomes 6)
// a-- -> 6 (then a becomes 5)
// ++a -> 6 (a becomes 6)
// 5 + 7 - 6 + 6 + 6 = 18
console.log(a); // Final value of a is 6