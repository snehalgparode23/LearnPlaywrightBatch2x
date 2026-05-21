//1.Take a number and print whether it's even or odd.

let number = 7;

if (number % 2 === 0) {
    console.log("The number is even.");
} else {
    console.log("The number is odd.");
}

/*2.Take marks (0–100) and print the grade based on these rules:

- 90 and above → A

- 80–89 → B

- 70–79 → C

- 60–69 → D

- Below 60 → Fail */
let studentMarks = 88;
if (studentMarks >= 90) {
    console.log("Grade: A");
}else if(studentMarks >= 80){
    console.log("Grade: B");    
}else if(studentMarks >= 70){
    console.log("Grade: C");    
}else if(studentMarks >= 60){
    console.log("Grade: D");    
}else{
    console.log("Grade: Fail");
}  


/*3.Problem: Take a year and check if it's a leap year.
Rules:Divisible by 4 AND not divisible by 100 → Leap year
OR divisible by 400 → Leap year
Else → Not a leap year*/
let year = 2020;
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year + " is a leap year.");
} else {
    console.log(year + " is not a leap year.");
}   