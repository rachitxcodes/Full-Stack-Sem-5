// let cel = 37;
// let fah = (cel * 9/5) + 32;
// console.log(fah);

// let number = 5;
// if (number % 3 == 0) {
//     console.log("Fizz");
// }
// else if (number % 5 == 0) {
//     console.log("Buzz");
// }
// else if (number % 3 == 0 && number % 5 == 0) {
//     console.log("FizzBuzz");
// }

// for(let i=1; i<=50; i++) {
//     if(i % 5 == 0) {
//         console.log(i);
//     }
// }

// let no = 5;
// let fact = 1;
// for(let i=1; i<=no; i++) {
//     fact = fact * i;
// }
// console.log(fact);  

// function areaOfRect(length, width) {
//     let area = length * width;
//     return area;
// }
// let length = 5;
// let width = 10;
// let area = areaOfRect(length, width);
// console.log(area);

// string = "madam";
// temp = "";
// let reverseString = () => {
//     for(let i=0; i<string.length; i++) {
//         temp += string[string.length - i - 1];
//     }
// }
// reverseString();
// if(temp == string) {
//     console.log("Palindrome");
// }
// else {
//     console.log("Not a Palindrome");
// }

// let string = "madam";
// let rev = string.split("").reverse().join("");
// if(rev == string) {
//     console.log("Palindrome");
// }
// else {
//     console.log("Not a Palindrome");
// }

// Filter function
// let arr = [1, 2, 3, 4, 5, 6];
// let result = arr.filter(function(n) {
//     return n % 2 == 0;
// });
// let result = arr.filter((n) => n % 2 === 0);
// console.log(result);

// Reduce function
// let arr = [1, 2, 3, 4, 5, 6];
// let result = arr.reduce(function(sum,n) {
//     return sum + n;
// },0);
// let result = arr.reduce((sum,n) => sum + n, 0);
// console.log(result);

// Map function
// let arr = [1, 2, 3, 4, 5, 6];
// let newArr = arr.map( (n) => n*n);
// console.log(arr);
// console.log(newArr);

// Find function
// let arr = [1, 2, 3, 4, 5, 6];
// let result = arr.find((n) => n > 3);
// console.log(result);

// let a = 10;
// let b = 20;
// const sum = (a,b) => a + b;
// console.log(sum(a, b));
// console.log(sum(5,10));


// Set Timeout  & Set Interval
// setTimeout(() => {
//     console.log("Hello");
// }, 2000);

// setInterval(() => {
//     console.log("Hello");
// }, 2000);

// // WAP to convert a user entered number into binary and hexdecimal format 
// let number = 22;
// console.log(number.toString(2));  // "10110"     (Base-2 / Binary)
// console.log(number.toString(8));  // "377"       (Base-8 / Octal)
// console.log(number.toString(10)); // "255"       (Base-10 / Decimal)
// console.log(number.toString(16)); // "ff"        (Base-16 / Hexadecimal)


// let arr =  [1, 2, 3, 4, 5,];
// console.log(arr); // [1, 2, 3, 4, 5]

// arr.push(6);
// console.log(arr); // [1, 2, 3, 4, 5, 6]

// arr.pop();
// console.log(arr); // [1, 2, 3, 4, 5]

// // unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
// arr.unshift(0);
// console.log(arr); // [0, 1, 2, 3, 4, 5]

// // shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
// console.log(arr.shift()); // 0


// let arr = [1,2,3,4,5];
// console.log(arr);
// console.log(arr.join(" : "));
// arr.foo = "hello";
// console.log(arr);
// for(let i=0; i<arr.length; i++) {
//     console.log(arr[i]);
// }
// for(let i in arr) {
//     console.log(arr[i]);
// }


// let arr = [1,2,3,4,5, null, undefined]
// console.log(arr.indexOf(undefined)); // -1 if not found
// console.log(arr.indexOf(null));
