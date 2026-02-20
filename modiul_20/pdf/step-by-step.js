/*

function sumOfNumbers(str) {
    return str;
    // const len = str.lenth;
    // console.log(len)
}
const result = sumOfNumbers('Dhaka');
console.log(result); 

*/

// 2. array ke parameter hishabe patabo?

/* function sumOfNumbers(number) {
    console.log(number);
}
const result = sumOfNumbers([10, 20, 30, 40, 50, 60]);
console.log(result); */

// 3. array ta loop korte hbe : 

/* function sumOfNumbers (number){
    for(const num of number){
        console.log(num)
    }
    // break;
    // console.log(nubmer);
    
}
const result = sumOfNumbers([10, 20, 30, 40, 50, 60]) */


// step 4:
/* 
function sumOfNumbers(number) {

    let sum = 0;
    for (const num of number) {
        // console.log(num);
        sum = sum + num;
        console.log(sum);
    }
}
sumOfNumbers([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]) */


// step 5: 
/* function sumOfNumbers(numbers) {
    let sum = 0;
    for (const number of numbers) {
        sum = sum + number;
    }
    return sum;
}
const nums = [54, 62, 12, 6];
const total = sumOfNumbers(nums);
console.log('Sum of Numbers is', total); */

// Output: Sum of Numbers is 54

// 6. advanced: 
// function evenNumbersSum(numbers) {
//     let sum = 0;
//     for (const number of numbers) {
//         if (number % 2 === 0) {
//             sum = sum + number;
//         }
//     }
//     return sum;
// }
// const nums = [54, 13, 1, 6];
// const total = evenNumbersSum(nums);
// console.log('Sum of even Numbers is', total);

function evenNumbersSum(numbers) {
    let sum = 0;
    for (const number of numbers) {
        // console.log(number);
        if (number % 2 === 0) {
            // console.log(number); 
            sum = sum + number;
            // console.log(sum);
        }

    }
    return sum;
}

console.log(evenNumbersSum([54, 13, 1, 6]));