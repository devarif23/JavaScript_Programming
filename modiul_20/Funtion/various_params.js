/***
 * 

*/
function doubleOrTriple(number, doDouble){
    if(doDouble === true){
        const result = number * 2;
        return result;
    }else{
        const result = number * 3;
        return result;
    }
}
// console.log(doubleOrTriple(5, false));
// console.log(doubleOrTriple(5, true));


/// array 

function numberOfElements(number){
    const len = number.length;
    return len;
}
numberOfElements([12,10,34,67,89,45])