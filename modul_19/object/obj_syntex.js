//primitive data type
//string, number, boolean, undefined, null
const name = "abul"; //string
const age = 25; //number
const isMarried = false; //boolean
let address; //undefined
const salary = null; //null





//non-primitive data type
//array, object
const subjects = ["math", "english", "bangla"]; //array

const bottol = {
    brand : "RFL",
    price : 120,
    color : "blue",
    volume : "1.5L"
}; //object

const subject = {
    name : "javaScript",
    teacher : "Mr. X",
    exm_date : "2024-07-15",
    chapters : [`first`, `second`, `third`, `fourth`],
    exms :{
        name : "final",
        date : "2024-12-20",
        marks : 100
    },
    class_time : function(){
        console.log("Class time is 10am to 12pm");
    } 
}