// ===== METHOD ১: (+) অপারেটর দিয়ে যোগ করা =====
// রিয়েল লাইফ: একটি ছেলে "arif" এবং একটি মেয়ে "jahan" এর নাম সরাসরি জুড়ে দেওয়া
const frist = "arif";
const last = "jahan";

const full_name = frist + last;  // "arif" + "jahan" = "arifjahan" (স্পেস নেই!)
// console.log(full_name);  // output: "arifjahan"


// ===== METHOD ২: concat() মেথড দিয়ে যোগ করা =====
// রিয়েল লাইফ: একটি ছেলে "arif" এবং তার মধ্যে একটি স্পেস রাখার পর "jahan" যোগ করা
// concat() বারবার ব্যবহার করে ধাপে ধাপে জুড়ে দেওয়া
const full_name1 = frist.concat(' ').concat(last);
// প্রথম: frist.concat(' ') = "arif " (স্পেস যোগ হয়েছে)
// তারপর: "arif ".concat(last) = "arif jahan"
// console.log(full_name1);  // output: "arif jahan" (স্পেস সহ)


// ===== includes() - কোন অক্ষর আছে কিনা খুঁজে বের করা =====
// রিয়েল লাইফ: "jahan" নামে কি 'k' অক্ষর আছে নাকি নেই? খোঁজা
console.log(last.includes('k'));  // "jahan" তে 'k' আছে কি? 
// output: false (নেই! কারণ j-a-h-a-n তে কোনো 'k' নেই)

// আরেকটি উদাহরণ:
// console.log(last.includes('a'));  // "jahan" তে 'a' আছে কি? output: true (আছে!)


