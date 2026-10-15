// This is a single line comment

/*
This is a multi-line comment
*/

// const x = "Hello World";
// x = "Good Bye World"; // This will throw an error because x is a constant
// console.log(x);

// if (true) {
//     var x = 5; // var is function-scoped (global), so x is accessible outside the block
// }
// console.log(x); // x is 5

// function fun() {
//     console.log("function");
// }
// var x = fun(); // x is assigned the return value of fun(), which is undefined
// console.log(x); // x is a function

// Hoisting
// console.log(x); // x is undefined because of hoisting
// let x = 5;

// Temporal Dead Zone (TDZ)
// const n;
// console.log(n); // ReferenceError: Cannot access 'n' before initialization
// n = 5;

// Data types in JavaScript
// let isActive = true;
// let age = 25;
// let price = 3.14;
// let bigNumber = 9007199254740992n;
// let name = "Howdy";
// let uniqueId = Symbol("id");
// let emptyValue = null;
// let notAssigned;

// const person = {
//     firstName: "Riya",
//     age: 21,
//     city: "Delhi"
// };

// console.log(typeof isActive);       // boolean
// console.log(typeof age);            // number
// console.log(typeof price);          // number
// console.log(typeof bigNumber);      // bigint
// console.log(typeof name);           // string
// console.log(typeof uniqueId);       // symbol
// console.log(typeof emptyValue);     // object
// console.log(typeof notAssigned);    // undefined
// console.log(typeof person);         // object
// console.log(person);





// let a = 10;
// console.log(a); // 10

// console.log(x); // undefined
// var x = 5;

// for(var i=0; i<5; i++);
// console.log(i); // 5

// for(let i=0; i<5; i++);
// console.log(i); // ReferenceError: i is not defined





// console.log(1+1+1+"1");
// var a = 1;
// console.log(a+a+a+a+a.toString());
// console.log(Number.parseInt(a)+Number.parseInt(a));





// WAP to check is number is armstrong or not
// let n = 153;
// let temp = n;
// let sum = 0;
// let digits = n.toString().length;
// while (temp > 0) {
//     let rem = temp % 10;
//     sum += rem ** digits;   
//     temp = Math.floor(temp / 10);
// }
// if (sum === n) {
//     console.log("Armstrong Number");
// } else {
//     console.log("Not an Armstrong Number");
// }

function isArmstrong(num) {
    let temp = num;
    let sum = 0;
    let digits = num.toString().length;
    while (temp > 0) {
        let rem = temp % 10;
        sum += rem ** digits;
        temp = Math.floor(temp / 10);
    }
    return sum === num;
}