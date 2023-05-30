#!/usr/bin/env node
import inquirer from "inquirer"
import Choices from "inquirer/lib/objects/choices.js"
import chalk from "chalk";
import figlet from "figlet";
figlet.defaults({fontPath: "assets/fonts"});

function ready(){
  console.log (chalk.bgGreenBright(figlet.textSync("WELCOME !!!")));
  
}
let currency_conversion={
    "PKR":{
        "USD":0.003501,
        "GBP":0.002836,     
        "KWD":0.001077,
        "SAR":0.013129,
        "PKR":1	
    },

    "USD":{
        "USD":1,
        "GBP":0.810298,    
        "KWD":0.307667,
        "SAR":3.750000,
        "PKR":285.646088
    },
    "GBP":{
        "USD":1.234867,
        "GBP":1,     
        "KWD":0.379887,
        "SAR":4.630753,
        "PKR":352.743605
    },

    "KWD":{
        "USD":3.250357,
        "GBP":2.632368,     
        "KWD":1,
        "SAR":12.188839,
        "PKR":928.296356
    },
    "SAR":{
        "USD":0.266667,
        "GBP":0.215938,     
        "KWD":0.082042,
        "SAR":1,
        "PKR":76.170905
    }
}
ready();
let answer:{
    from:"PKR"|"SAR"|"GBP"|"USD"|"KWD",
    to:"PKR"|"SAR"|"GBP"|"USD"|"KWD",
    amount:number} = await inquirer.prompt([
{
  type:'list',
  name: 'from',
  choices: ["PKR","SAR","GBP","USD","KWD"],
  message: (chalk.greenBright("Select the currency from which you want to convert "))
},
{
    type:'list',
    name: 'to',
    choices: ["PKR","SAR","GBP","USD","KWD"],
    message: (chalk.greenBright("Select the currency to which you want to convert "))
  },
  {
    type:'number',
    name: 'amount',
  
    message: (chalk.greenBright("Enter the amount of currency you want to convert "))
  },

])

const {from, to, amount} = answer;

if(from && to && amount) {
  let output = currency_conversion[from][to] * amount;
  console.log(chalk.bgBlueBright(`The convertion rate from  ${from}  to  ${to} is equal to ${output}`))
} else {
  console.log (chalk.bgRedBright("Enter the correct option"))
}