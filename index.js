#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let CurrentYear = 2024;
let answer = await inquirer.prompt([{
        message: "Please type your birth year for calculate your age",
        type: "number",
        name: "birthYear"
    }]);
console.log(chalk.greenBright(`You'r ${CurrentYear - answer.birthYear} Years Old...!`));
