const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function atmWithdrawal(balance, withdrawAmount) {

    while (true) {

        if (withdrawAmount > balance) {
            console.log("Insufficient balance.");
            break;
        }

        balance -= withdrawAmount;

        console.log(`Withdrawal successful: ₹${withdrawAmount}`);
        console.log(`Remaining Balance: ₹${balance}`);

        rl.question("Enter withdrawal amount: ", (input) => {
            atmWithdrawal(balance, Number(input));
        });
        break;
    }
}


const balance = 5000;

rl.question("Enter withdrawal amount: ", (input) => {
    atmWithdrawal(balance, Number(input));
});