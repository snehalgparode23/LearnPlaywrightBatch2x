// Ternary Operator
let rajkumar_age = 25;
let result = rajkumar_age >= 18 ? "You can vote" : "You cannot vote";
console.log(result);

// Nested Ternary Operator
let age = 17;
let result2 = age >= 18 ? "You can vote" : age >= 16 ? "You can drive" : "You cannot vote or drive";
console.log(result2);

//1.Maximum number between two numbers, okay, by using the ternary operator 
let a = 10;
let b = 20;
let max_num = a > b ? a : b;
console.log("Maximum number between a and b is", max_num);
//Output: Maximum number between a and b is 20

//2.Maximum between the three numbers also by using turnery operator
let x = 5;
let y = 10;
let z = 15;
let max_num2 = x > y ? (x > z ? x : z) : (y > z ? y : z );
console.log("Maximum number between x, y and z is", max_num2);
//Output: Maximum number between x, y and z is 15   



let age1 = 20;

let is_pramod_will_go_to_goa = age1 > 18 ? "Yes, let go goa!" : "No you are minor, Not going";
console.log(is_pramod_will_go_to_goa)
// Ternary = condition ? "true resul" : "false result";

//  Nested Ternary

// Multiple Condition
let age2 = 26;
let is_pramod_goa = age2 > 26 ? "Yes, he will go" : "else he will not go";
console.log(is_pramod_goa);


let age_pramod = 45;
let is_pramod_d = age_pramod > 18 ? (age_pramod > 26 ? "Drink" : "No Drink") : "NO GOA";
console.log(is_pramod_d);


let statusCode = 404;
let category = 
        statusCode < 300 ? "Success" : 
           statusCode < 404 ? "Redirect" : 
                statusCode < 500 ? "Client Error" : "Server Error";
console.log(`Status code ${statusCode} : ${category}`);


let temp = 35;
let feel = (temp >= 40) ? "very hot" :
           (temp >= 30) ? "hot" : 
           (temp >= 20) ? "warm" : 
           (temp >= 10) ? "cool" : "cold";
console.log(`Temperature is ${temp} degree Celsius, it feels ${feel}`);
