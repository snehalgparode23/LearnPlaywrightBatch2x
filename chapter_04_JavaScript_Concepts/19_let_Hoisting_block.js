let x ="global";

if(true){
    //TDZ for x starts here
    //console.log(x); // ReferenceError: Cannot access 'x' before initialization
    let x = "block"; //TDZ for x ends here
    console.log(x); // "block"
}
console.log(x); // "global"