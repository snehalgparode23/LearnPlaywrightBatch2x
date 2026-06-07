//Premitive Vs Reference
//Primitive data types are immutable, meaning their values cannot be changed after they are created. When you assign a primitive value to a variable, it creates a copy of that value. If you change the value of one variable, it does not affect the other variable.  
let a = 10;
let b = a; 
b = 99;
console.log(a);

// Objects — copied by REFERENCE , call by ref. 
// Reference - object, array, function
let obj1 = { val: 10 };
let obj2 = obj1;
obj2.val = 99;
console.log(obj1.val);