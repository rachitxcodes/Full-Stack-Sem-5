function outer() {
    let count = 0;
    function increment() {
        count++;
        console.log(count);
    }
    return {increment};
}
const counter = outer();
counter.increment();
counter.increment();
counter.increment();


// function outer() {
//     let a = 5;
//     function inner() {
//         console.log(a);
//     }
//     return {inner};
// }
// let result = outer();
// result.inner();


