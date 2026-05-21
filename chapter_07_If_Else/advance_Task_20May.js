/* 1.Question 1 — HTTP Status Code Categorizer
Problem: Given an HTTP status code, print which category it belongs to.
200–299 → Success
300–399 → Redirection
400–499 → Client Error
500–599 → Server Error
Anything else → Invalid
Sample Input/Output:
Input: 404
Output: Client Error
Input: 200
Output: Success */
let statusCode = 404;

if (statusCode >= 200 && statusCode <= 299) {
    console.log("Success");
} else if (statusCode >= 300 && statusCode <= 399) {
    console.log("Redirection");
} else if (statusCode >= 400 && statusCode <= 499) {
    console.log("Client Error");
} else if (statusCode >= 500 && statusCode <= 599) {
    console.log("Server Error");
} else {
    console.log("Invalid");
}

let statuscode=200;

if(statuscode>=200 && statuscode <=299){
    console.log(`Input : ${statuscode} Output : Successfull`)
}else if (statuscode>=300 && statuscode <=399)
{
console.log(`Input : ${statuscode} Output : Redirected`)
}else if (statuscode>=400 && statuscode<=499)
{
console.log(`Input : ${statuscode} Output : ClientError`)
}else if (statuscode>=500 && statuscode <=599)
{
console.log(`Input : ${statuscode} Output : ServerError`)
}else
    {
console.log("Invalid API Status code")
}

/* 2. Compare actual result with expected result and print test verdict.

Sample Input/Output:

expected = "Login Successful"
actual   = "Login Successful"
Output: ✅ Test Passed

expected = "Login Successful"
actual   = "Invalid Credentials"
Output: ❌ Test Failed — Expected: Login Successful, Got: Invalid Credentials */

let expected = "Login Successful";
let actual = "Login Successful";

if (expected === actual) {
    console.log("✅ Test Passed");
} else {
    console.log(`❌ Test Failed — Expected: ${expected}, Got: ${actual}`);
}

let expected1 = "Login Successful";
let actual1 = "Invalid Credentials";

if (expected1 === actual1) {
    console.log("✅ Test Passed");
} else {
    console.log(`❌ Test Failed — Expected: ${expected1}, Got: ${actual1}`);
}

/* 3. Problem: Given a bug's impact score (1–10), classify the severity.
9–10 → Critical (block release)
7–8 → High
4–6 → Medium
1–3 → Low
Anything else → Invalid score
Sample Input/Output:
Input: 9
Output: Severity: Critical — Block release
Input: 5
Output: Severity: Medium */
let impactScore = 9;

if (impactScore >= 9 && impactScore <= 10) {
    console.log("Severity: Critical — Block release");
} else if (impactScore >= 7 && impactScore <= 8) {
    console.log("Severity: High");
} else if (impactScore >= 4 && impactScore <= 6) {
    console.log("Severity: Medium");
} else if (impactScore >= 1 && impactScore <= 3) {
    console.log("Severity: Low");
} else {
    console.log("Invalid score");
}

let impactscore1=5;
if(impactscore1>=9 && impactscore1 <=10){
    console.log(`Input : ${impactscore1} Output : Severity: Critical — Block release`)
} else if(impactscore1>=7 && impactscore1 <=8){
    console.log(`Input : ${impactscore1} Output : Severity: High`)
} else if(impactscore1>=4 && impactscore1 <=6){
    console.log(`Input : ${impactscore1} Output : Severity: Medium`)
} else if(impactscore1>=1 && impactscore1 <=3){
    console.log(`Input : ${impactscore1} Output : Severity: Low`)
} else {
    console.log("Invalid score");
}


/* 4. Given the percentage of test cases passed in a CI build, report build health.
100% → Green Build
90–99% → Stable (investigate failures)
70–89% → Unstable
Below 70% → Broken Build (block deployment)
Sample Input/Output:
Input: 95
Output: 🟡 Stable — Investigate failures
Input: 65
Output: 🔴 Broken Build — Block deployment */
let percentagePassed = 95;

if (percentagePassed === 100) {
    console.log("🟢 Green Build");
} else if (percentagePassed >= 90 && percentagePassed <= 99) {
    console.log("🟡 Stable — Investigate failures");
} else if (percentagePassed >= 70 && percentagePassed <= 89) {
    console.log("🟠 Unstable");
} else {
    console.log("🔴 Broken Build — Block deployment");
}

let percentagePassed1=65;

if (percentagePassed1 === 100) { 
    console.log("🟢 Green Build");
} else if (percentagePassed1 >= 90 && percentagePassed1 <= 99) {
    console.log("🟡 Stable — Investigate failures");
} else if (percentagePassed1 >= 70 && percentagePassed1 <= 89) {
    console.log("🟠 Unstable");
} else {
    console.log("🔴 Broken Build — Block deployment");
}


/* 5.Track failed login attempts. Lock the account after 3 failed attempts.
Sample Input/Output:
Input: attempts = 2
Output: 1 attempt left before lockout
Input: attempts = 3
Output: 🔒 Account Locked — Contact support
Input: attempts = 0
Output: Login successful */
let attempts = 2;

if (attempts === 0) {
    console.log("Login successful");
} else if (attempts === 3) {
    console.log("🔒 Account Locked — Contact support");
} else {
    console.log(`${3 - attempts} attempt left before lockout`);
}
let attempts1=3;

if (attempts1 === 0) {
    console.log("Login successful");
} else if (attempts1 === 3) {
    console.log("🔒 Account Locked — Contact support");
} else {
    console.log(`${3 - attempts1} attempt left before lockout`);
}
let attempts2=0;

if (attempts2 === 0) {
    console.log("Login successful");
} else if (attempts2 === 3) {
    console.log("🔒 Account Locked — Contact support");
} else {
    console.log(`${3 - attempts2} attempt left before lockout`);
}