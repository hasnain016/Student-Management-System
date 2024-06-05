#! /usr/bin/env node 
import chalk from "chalk";
import inquirer from "inquirer";
console.log("");
let order = chalk.blueBright.bold("Cli Based Student Management System");
let order1 = chalk.redBright.bold("Hasnain Atif");
let order2 = chalk.yellowBright.bold("Select the course to enroll");
let order3 = chalk.yellowBright.bold("Enter student name:");
let order4 = chalk.red.underline("Please enter a non-empty value.");
let order5 = chalk.yellowBright.bold("Select any one Payment method");
let order6 = chalk.yellowBright.bold("Transfer money:");
let order7 = chalk.yellowBright.bold("Select the course to enroll");
let order8 = chalk.yellowBright.bold("What would you like to do next?");
let order9 = chalk.grey.italic("\n*******Status*******\n");
console.log(chalk.yellow(`------Welcome to the ${order} program made by ${order1} ------`));
const randomNumber = Math.floor(10000 + Math.random() * 90000);
let myBalance = 0;
let answer = await inquirer.prompt([
    {
        name: "students",
        type: "input",
        message: order3,
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return order4;
        },
    },
    {
        name: "courses",
        type: "list",
        message: order2,
        choices: [
            " 1) Graphic Designing",
            " 2) Programming",
            " 3) Digital Marketing",
            " 4) E-Commerce",
        ],
    },
]);
const tutionfee = {
    " 1) Graphic Designing": 50000,
    " 2) Programming": 60000,
    " 3) Digital Marketing": 70000,
    " 4) E-Commerce": 80000,
};
console.log(`\nTution Fees: ${tutionfee[answer.courses]}/-\n`);
console.log(`\nBalance: ${myBalance}\n`);
let paymentType = await inquirer.prompt([
    {
        name: "Payment",
        type: "list",
        message: order5,
        choices: ["Bank", "Easypaisa", "Jazzcash", "Paypal", "Payoneer"],
    },
    {
        name: "amount",
        type: "input",
        message: order6,
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return order7;
        },
    },
]);
console.log(`\npayment has been transferred through: ${paymentType.Payment}\n`);
const tutionFees = tutionfee[answer.courses];
const paymentAmount = parseFloat(paymentType.amount);
if (tutionFees === paymentAmount) {
    console.log(chalk.blue(`Congratulations, you have successfully enrolled in: ${answer.courses}.\n`));
    let ans = await inquirer.prompt([
        {
            name: "select",
            type: "list",
            message: order8,
            choices: ["View Status", "Exit"],
        },
    ]);
    if (ans.select === "View Status") {
        console.log(order9);
        console.log(chalk.blue.bold(`Student Name: ${answer.students}`));
        console.log(chalk.blue.bold(`Student ID: ${randomNumber}`));
        console.log(chalk.blue.bold(`Course: (${answer.courses})`));
        console.log(chalk.blue.bold(`Tutions Fees paid: ${paymentAmount}`));
        console.log(chalk.blue.bold(`Balance: ${(myBalance += paymentAmount)}`));
    }
    else {
        console.log(chalk.white.bold("\nExiting Student Management System"));
    }
}
else {
    console.log(chalk.red.underline("Invalid amount due to your selected course\n"));
}
