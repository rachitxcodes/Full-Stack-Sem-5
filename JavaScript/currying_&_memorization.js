// Memorization
// function memorize(fn) {
//     const cache = {};
//     return function(x,y) {
//         const key = `${x},${y}`;
//         if (key in cache) {
//             console.log('from cache');
//             return cache[key];
//         } else {
//             const result = fn(x,y);
//             cache[key] = result;
//             return result;
//         }
//     }
// }
// const add = memorize((x,y) => x + y);
// console.log(add(1,2));
// console.log(add(1,2));
// console.log(add(1,2));
// console.log(add(1,2));
// console.log(add(1,2));
// console.log(add(1,2));



// // Currying
// function factorial(n) {
//     return function calculate() {
//         if (n <= 1) {
//             return 1;
//         }

//         return n * factorial(n - 1)();
//     };
// }
// console.log(factorial(5)()); // 120 

// function fibonacci(n) {
//     return function calculate() {
//         if (n <= 1) {
//             return n;
//         }

//         return fibonacci(n - 1)() +
//                fibonacci(n - 2)();
//     };
// }
// console.log(fibonacci(6)()); // 8

// function a(x) {
//     return function b(y) {
//         return function c(z) {
//             return x + y + z;
//         }
//     }
// }
// console.log(a(1)(2)(3)); // 6