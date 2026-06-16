let testRun = new Promise(function (resolve, reject) {
    let apiCall = true;  
    if (apiCall) {
        resolve({"Satsus " : " done"});
    } else {
         reject("Assertion Failed");
    }
});


testRun.then(function (data) {
    console.log(data);
}).catch(function (error) {
    console.log(error);
}).finally(function () {
    // This code will be always executed anyhow. 
    console.log("I will be execued anyHow!");
})