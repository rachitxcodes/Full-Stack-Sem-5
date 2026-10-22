
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
console.log(isArmstrong(153));

// Using Arrow Function
const isArmStrongNumber = (num) => {
    let str = num.toString();
    let sum = 0;
    let power = str.length;
    for( let i=0; i<str.length; i++) {
        sum += Number(str[i]) ** power;
    }
    return sum === num;
};
console.log(isArmStrongNumber(153));
