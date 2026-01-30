// ===== স্ট্রিং ডিক্লেয়ার করা (String Declaration) =====
// রিয়েল লাইফ: ব্যক্তির নাম বিভিন্ন উপায়ে লিখা যায় - সব একই জিনিস
let str1 = "Hello";       // ডাবল কোট দিয়ে
let str2 = 'World';       // সিঙ্গেল কোট দিয়ে
let str3 = `Hello World`; // ব্যাকটিক (Template Literal) দিয়ে
// console.log(typeof (str1));  // output: "string"



// ===== স্ট্রিং কনক্যাট করা (String Concatenation) =====
// রিয়েল লাইফ: নাম এবং পরিবারের নাম যোগ করে পূর্ণনাম বানানো
let firstName = "John";
let lastName = "Doe";

let fullName = firstName + " " + lastName;  // "John" + " " + "Doe"
// console.log(fullName);  // output: "John Doe"

// ===== স্ট্রিং এর দৈর্ঘ্য জানা (String Length) =====
// রিয়েল লাইফ: একটি বার্তার মোট অক্ষর সংখ্যা কতো তা জানা
let message = "Hello, World!";
// console.log("Length of message:", message.length);  // output: 13 (সব কিছু গণনা করা হয়)

// ===== স্ট্রিং IMMUTABLE (অপরিবর্তনীয়) - পরিবর্তন করা যায় না ====
// রিয়েল লাইফ: একটি নাম "Dhaka" লেখা হয়েছে, এখন যদি আপনি [1] এর অক্ষর 'd' এর জায়গায় 'f' রাখতে চান,
// তাহলে তা কাজ করবে না! স্ট্রিং এ সরাসরি অক্ষর পরিবর্তন করা যায় না

var name = 'Dhaka'
// let name = [`d`,`h`,`a`,`k`,`a`];  // এটি একটি array হিসেবে দেখানো হয়েছে
name[1] = 'f'  // এটি কাজ করবে না - স্ট্রিং immutable!
console.log(name);  // output: "Dhaka" (একই থাকবে, 'f' হবে না)
// console.log(name[1]);  // output: "h" (পরিবর্তন হয়নি)


// ===== ARRAY MUTABLE (পরিবর্তনযোগ্য) - পরিবর্তন করা যায় ====
// রিয়েল লাইফ: একটি লিস্টে সংখ্যা আছে [10, 20, 29, 0, 3]
// এখন আপনি চাইলে প্রথম সংখ্যা '10' এর জায়গায় '100' রাখতে পারেন - এটা সম্ভব!
let number = [10, 20, 29, 0, 3];
number[0] = '100';  // এটি কাজ করবে! Array এ পরিবর্তন করা যায়
// console.log(number[0]);  // output: "100" (পরিবর্তিত হয়েছে)
// console.log(number);  // output: ['100', 20, 29, 0, 3]

