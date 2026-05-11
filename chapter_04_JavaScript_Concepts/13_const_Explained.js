/*const BASE_URL = "https://app.thetestingacademy.com";
// const BASE_URL = "https://app.thetestingacademy.com";
//BASE_URL = "https:/ / staging.thetestingacademy.com";
// TypeError: Assignment to constant variable.


const name = "pending";
// name = "done"; // TypeError: Assignment to constant variable.
{
    let name = "Dutta";
}
function say() {
    let name = "Dutta";
}
say();
say();*/
/*const name = "Sakshi";
const name = "Snehal"; // SyntaxError: Identifier 'name' has already been declared
name = "Siya"; // TypeError: Assignment to constant variable.
*/
  for (var i = 0; i < 3; i++) {
     setTimeout(() => console.log(i), 100);
   }

   for (let j = 0; j < 3; j++) {
     setTimeout(() => console.log(j), 100);
   }