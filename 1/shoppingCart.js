var totalCartValue = 0;

const addToCart = (itemPrice, discount) => {
    let discountedPrice = itemPrice - discount;

    const taxRate = 0.10; // fix tax 

    let tax = discountedPrice * taxRate; // calculate tax on discounted price

    let finalPrice = discountedPrice + tax; // final price with tax

    totalCartValue += finalPrice; // adding price to the cart 

    console.log(`Final Price of Item: ₹${finalPrice.toFixed(2)}`); // printing the cart price 

    console.log(`Total Cart Value: ₹${totalCartValue.toFixed(2)}`); // print current total cart value
};

// 1st output
addToCart(1000, 100);

// 2nd output
addToCart(2000, 200);