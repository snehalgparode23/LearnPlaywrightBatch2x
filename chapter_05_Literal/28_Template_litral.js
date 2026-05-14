let firstName = "Snehal";
let fullName = `Hi ${firstName} Parode `;
console.log(fullName); 


const env = "staging";
const userId = 12345;
const apiUrl = `https://${env}.api.example.com/users/${userId}`;
console.log(apiUrl); 

let env1 = "staging";
env1 = "prod";
const userId1 = 12345;
const apiUrl1 = `https://${env1}.api.example.com/users/${userId1}`;
console.log(apiUrl1); 
/*
//playwright selector
const rowIndex = 3;
const columnName = "email";
await page.locator(`[data-row=${rowIndex}] [data-column="${columnName}"]`).click();
*/
//logs
const testName = "Login Test";
const testStatus = "passed";
const duration = 2.3; 
console.log(`Test "${testName}" ${testStatus} in ${duration} seconds.`);
/*
const testCase = "checkout flow";
const timeStamp = Date.now();
await page.screenshot({ path: `screenshots/${testCase}_${timeStamp}.png` });
*/
const userName = "Snehal";
const role = "admin";

const payload = `{
  "user": "${userName}",
  "role": "${role}",
  "timestamp": "${new Date().toISOString()}"
}`;
console.log(payload);