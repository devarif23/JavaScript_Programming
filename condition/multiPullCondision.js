let username = "admin";
let password = "12345";
let role = "user";

if (username === "admin" && password === "12345") {
    console.log("অ্যাডমিন হিসেবে লগিন সফল!");
    
    if (role === "admin") {
        console.log("সমস্ত এক্সেস অনুমোদিত");
    } else if (role === "moderator") {
        console.log("সীমিত এক্সেস");
    } else {
        console.log("সাধারণ এক্সেস");
    }
}
else if (username === "user" && password === "12345") {
    console.log("ইউজার হিসেবে লগিন সফল!");
} 
else {
    console.log("লগিন ব্যর্থ! ইউজারনেম বা পাসওয়ার্ড ভুল");
}