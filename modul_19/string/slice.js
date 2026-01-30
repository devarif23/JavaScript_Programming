// ===== SLICE() - স্ট্রিং এর একটি অংশ কেটে নেওয়া =====
// রিয়েল লাইফ: যেমন একটি "andorkilla" শব্দ থেকে কয়েকটি অক্ষর বেছে নেওয়া
const address = `andorkilla`;
const part = address.slice(2, 6);  // ইনডেক্স 2 থেকে 6 পর্যন্ত কেটে নিন
// output: "dork" (a-n-d-o-r-k-i-l-l-a এর মধ্যে 2-5 ইনডেক্স)
// console.log(part);



// ===== SPLIT() - স্ট্রিং কে কমা দিয়ে আলাদা করে Array বানানো =====
// রিয়েল লাইফ: যেমন "Rahim,krim,kharim,jarim,terim" এক দোকানে ৫ জন বন্ধু আসলো
//              কিন্তু তাদের নাম কমা দিয়ে লিখা আছে - এটা আলাদা করে দরকার
const friendStr = `Rahim,krim,kharim,jarim,terim`;
// const friends = friendStr.split(`,`);  // কমা দিয়ে ভাগ করুন
// console.log(friends);  // output: ['Rahim', 'krim', 'kharim', 'jarim', 'terim']



// ===== SPLIT() + JOIN() এর সংমিশ্রণ =====
// SPLIT: কমা দিয়ে Array তে রূপান্তর
const friends = friendStr.split(",");/// string থেকে array বানানো (কমা দিয়ে আলাদা)

// JOIN: Array এর ডেটা কে | দিয়ে যুক্ত করা
// রিয়েল লাইফ: বন্ধুদের নাম এখন পাইপ | দিয়ে লেখা যাক "Rahim | krim | kharim | jarim | terim"
const friendName = friends.join("|");  // array এর data গুলোকে | দিয়ে যুক্ত করুন
console.log(friendName);
// output: "Rahim|krim|kharim|jarim|terim"



