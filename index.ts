#! /usr/bin/env node

import inquirer from "inquirer";

const currency : any = {
    USD: 1,     //Base currency is US dollar
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280
};

let user_answer = await inquirer.prompt([
    {
        message:"Enter from currency:",
        type:"list",
        name:"from",
        choices:["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        message:"Enter from currency:",
        type:"list",
        name:"to",
        choices:["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        message:"Enter your amount:",
        type:"number",
        name:"amount",
    }
]);

let fromAmount = currency[user_answer.from]
let toAmount = currency[user_answer.to]
let amount = user_answer.amount
let baseAmount = amount/fromAmount
let convertedAmount = baseAmount * toAmount

console.log(Math.round(convertedAmount));
