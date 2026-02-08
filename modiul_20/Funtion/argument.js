/*
***** note : *****

1. difference -----> eta function er name
2. num1, num2 -----> eta function er paremeter
3. doubleIt();  -----> eta function er call
4. doubleIt(15);  -----> 15 eta functon ar argument  --------- argument a man dile paremeter a jabe . 


======================================================================================
function doubleIt (number){
    const doubled = number * 2;
    console.log(number , `|`, doubled);
}
console.log('I will call the function');
console.log('-------------------------')
doubleIt(15); 
*/


function difference(num1, num2) {
    const diff = num1 - num2;
    console.log(`fatherAge : `, num1, `|` , `myAge : `, num2, `|`, ` difference is  = `, diff);

}
const fatherAge = 45;
const myAge = 20;

difference(fatherAge, myAge)