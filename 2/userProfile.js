// user data 
let userName = "Vyom";
let userAge = 20;
let isPremiumUser = true;
let userBio = null;
let userId = Symbol("userId");

let userAddress = {
    city: "Mumbai",
    country: "India"
};

let favoriteItems = ["Laptop", "Headphones", "Smartphone", "Keyboard"];
// greeting function
function getUserGreeting() {
    return `Hello, ${userName}! Welcome to our application.`;
}


console.log("User Name:", userName);

console.log("City:", userAddress.city);

console.log("Third Favorite Item:", favoriteItems[2]);

console.log("Greeting:", getUserGreeting());