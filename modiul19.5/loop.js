/* looping  
* 1. for loop 
* 2. while loop 
* 3. do while 
* 4. for of  ====> array loop korar jonno.
* 5. for in  ====> object loop korar jonno.
*/

// array 

const friends = ['arif', 'joy', 'mark', 'waren'];


//for of loop ---------
for (const friend of friends){
    // console.log(friend); 
}

// for loop 

for (let i = 0; i < friends.length ; i++){
    // console.log(i, `:`, friends[i]);
}

//  eta ke amara while loop dio shomadan korte pari

let i = 0 ;
while (i < friends.length){
    // console.log(i, ` : ` , friends[i]);
    i++;
}

reverse 