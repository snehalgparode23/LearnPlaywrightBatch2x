// Basic Async and Await

async function getTestResult (){
    return "Pass" ;

}
getTestResult().then(function (res){
    console.log("Result:", res);
});

// Additional example: async function with await
async function runTests() {
    let test1 = await Promise.resolve("Test 1 Passed");
    let test2 = await Promise.resolve("Test 2 Passed");
    console.log(test1);
    console.log(test2);
}

runTests();