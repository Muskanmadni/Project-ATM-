import inquirer from "inquirer";
let myBalance = 10000;
let balance = "incifficant balance";
let myPin = 7777;
let PinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "please enter your pin"
    }
]);
if (PinAnswer.pin === myPin) {
    console.log("your Pin code is correct");
}
let OperationAns = await inquirer.prompt([
    {
        name: "operation",
        type: "list",
        message: "please select option",
        choices: ["withdraw", "fastcash", "check balance"]
    }
]);
if (OperationAns.operation === "withdraw") {
    let AmountAns = await inquirer.prompt([
        {
            name: "Amount",
            type: "number",
            message: "please Enter your Amount"
        }
    ]);
    myBalance -= AmountAns.Amount;
    console.log(`your remaining Amount is: ${myBalance}`);
    if (myBalance === myBalance) {
        console.log("incifficant");
    }
}
else if (OperationAns.operation === "fastcash") {
    let cash = await inquirer.prompt([
        {
            name: "Easycash",
            type: "list",
            message: "please select Amount",
            choices: ["500", "1000", "3000", "5000", "8000", "15000"]
        }
    ]);
    if (myBalance -= cash.Easycash) {
        console.log("your Remaining Amount is:" + myBalance);
    }
    else {
        console.log("incifficant balance");
    }
}
else if (OperationAns.operation === "check balance") {
    console.log(`your balance is ${myBalance}`);
}
else {
    console.log("incorrect password");
}
