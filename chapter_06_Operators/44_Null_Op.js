//??

console.log(null >= 0); //  null == 0 or null > 0
console.log(null === 0);

// Nullish Operator (??)
let amul = null;
let milk_req = amul ?? "Katraj milk";
console.log(milk_req); // Output: Katraj milk

let amul1 = "Amul milk";
let milk_req1 = amul1 ?? "Katraj milk";
console.log(milk_req1);