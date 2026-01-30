// ===== উদাহরণ ১: STRING CASE তুলনা করা =====
const subject = 'chemestry';
const book    = `Chemestry`;

// বড় এবং ছোট হাতের পার্থক্য উপেক্ষা করে তুলনা করার জন্য toLocaleLowerCase() ব্যবহার করুন
// if (subject.toLocaleLowerCase() === book.toLocaleLowerCase()){
//     console.log('বই পড়ে ফাতায় ফেলবো');   
// }else{
//     console.log('হুদাই হুদাই পাতা উলটাই');
// }


// ===== উদাহরণ ২: TRIM() - শুরু এবং শেষের জায়গা সরিয়ে ফেলা =====
const name_1 = "Arif ";  // শেষে স্পেস আছে
const name_2 = " Jahan"  // শুরুতে স্পেস আছে

// IMPORTANT: trim() একটি মেথড, তাই () ব্যবহার করতে হয়
// ভুল: name_1.trim (এটি কাজ করবে না)
// সঠিক: name_1.trim() এটি ব্যবহার করুন
if(name_1.trim() === name_2.trim()){
    console.log("তুমি আরিফ");
    
}else{
    console.log('তুমি জাহান');  
}