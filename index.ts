#! /usr/bin/env node

import inquirer from "inquirer";

import chalk from "chalk";

let randomNumber = Math.floor(Math.random() * 10 + 1);
let answer = await inquirer.prompt(
    [
        {
            name:"userName",
            type:"input",
            message:(chalk.yellow("Enter user Name"))
        },

        {
            name:"UserNumber",
            type:"number",
            message:(chalk.yellow("Please guess a number b/w 1to10"))
        },
    ]
);

if(answer.UserNumber === randomNumber)
    console.log(chalk.blue(`${answer.userName} you win`));

else{
    console.log (chalk.red(`${answer.userName} you lose`));
}
    
