console.log(score); // ReferenceError: Cannot access 'Score' before initialization
let score = 100;

{
    //TDZ for score starts here
    // console.log(score); // ReferenceError: Cannot access 'Score' before initialization
    //console.log(Score); // ReferenceError: Cannot access 'Score' before initialization  
    //let score = 150; // ReferenceError: Cannot access 'Score' before initialization
    //-----TDZ for score ends here-----
    let score = 200; //declaration and initialization happens here
    console.log(score); // 200 
}