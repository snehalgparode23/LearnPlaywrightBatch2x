class person{
    constructor(){
         console.log("I will be created when Obj is created!")
    }
    //Attributes
    name;  
    email;
    salary;
    address;

    //Behavior
    sleep(){}
    eat(){}
    walk(){}
}
const obj_ref = new person();
// obg_ref = Is called the object reference (address)
// new Person(); -> Is the object with the new keyword 

console.log(obj_ref);