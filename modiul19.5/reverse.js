const number = [10, 20, 30, 40, 50, 60, 70];

// 1.  number.reverse(); console.log(number);

// const reversed = number.reverse();
// console.log(reversed);


/* 
2. for of loop

const rev_numbers = [`New array : `, ];

for (const num of number) {
    rev_numbers.push(num)
    rev_numbers.unshift(num)
}
console.log(rev_numbers);

*/


// 3 . for 
// push unshift
/* const reverse_number = [];
for (let i = 0; i < number.length; i++) {
    const num = number[i];
    reverse_number.unshift(num)
}
console.log(reverse_number); */

//revers side 

for (let i = number.length - 1 ; i >= 0; i--){
    const num = number[i];
    console.log(num);
    // document.writeln(num)
  
}