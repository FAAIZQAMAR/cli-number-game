#! /usr/bin/env node
import inquirer from "inquirer";
const randomnumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([
    {
        name: "guessednumberbyuser",
        type: "number",
        message: "please guess a number between 1-10",
    }
]);
if (answers.guessednumberbyuser === randomnumber) {
    console.log("Congratulation! You Guessed the Right Number.");
}
else {
    console.log("Sorry! You Guess the Wrong Number.");
}
