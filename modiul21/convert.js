// 1. inch to feet : output > 6.25 

/* function inchToFeet(inch) {
    const feet = inch / 12;
    return feet;
}
const arifHight = inchToFeet(75);
console.log(arifHight); */
 
// 1 . inch to feet : output > 6 ft 3inch 

function inchToFeet2(inch){
    const feet = inch / 12;
    return feet;
}
const arifHight2 =  inchToFeet2(75);
// console.log(arifHight2);




/**
 * 1 those year that is not divisible by 100, if the disible by 4: then it will be leep year : 
 */

function isLeapYear2(year){
    if (year % 100 !== 0 && year % 4 ===0){
        return true;
    }else if (year % 100 === 0 && year % 400 === 0){
        return true;
    }else{
        return false;
    }
}
// const lipi = isLeapYear2(2003);
// console.log(lipi);

const isLeap = isLeapYear2(2100);
const isLeap2 = isLeapYear2(2400);
const isLeap3= isLeapYear2(1900);
const isLeap4= isLeapYear2(2052);
console.log(isLeap,isLeap2,isLeap3, isLeap4);
