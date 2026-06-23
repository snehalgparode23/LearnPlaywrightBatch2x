/*Test Case Result Counter
After a test suite runs, you receive an array of test results (strings: "pass", "fail", "skip"). Write a JavaScript program using a for loop that counts how many tests passed, failed, and were skipped. Print a test report with total tests, counts, pass rate percentage, and a verdict (all passed → ready for release, ≤2 failures → review, >2 failures → block release).*/

let testResults = ["pass", "pass", "fail", "pass", "skip", "pass", "fail", "pass"];

let passed = 0;
let failed = 0;
let skipped = 0;

for (let i = 0; i < testResults.length; i++) {
    let result = testResults[i];
    if (result === "pass") {
        passed++;
    } else if (result === "fail") {
        failed++;
    } else if (result === "skip") {
        skipped++;
    }
}

let total = testResults.length;
let passRate = ((passed / total) * 100).toFixed(1);

let verdict;
if (failed === 0) {
    verdict = "Ready for release";
} else if (failed <= 2) {
    verdict = "Review";
} else {
    verdict = "Block release";
}

console.log("Total tests: " + total);
console.log("Passed: " + passed);
console.log("Failed: " + failed);
console.log("Skipped: " + skipped);
console.log("Pass rate: " + passRate + "%");
console.log("Verdict: " + verdict);

