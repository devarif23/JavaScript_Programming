const mobail = {
    brand: 'vivo',
    price: 25000,
    color: 'black',
    cammera: '50mp',
    isNew: true
}

//array : for of loop
// Object : for in loop

// for (const prop in mobail){
//     // console.log(prop);
//     console.log(mobail[prop]);  
// }

const keys = Object.keys(mobail);
console.log(keys);

for (const key of keys) {
    console.log(key, ':' , mobail[key]);

}