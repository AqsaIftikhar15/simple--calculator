import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "enter first number", type: "number", name: "firstnumber" },
  { message: "enter second number", type: "number", name: "secondnumber" },
  {
    message: "select anyone option to perform",
    type: "list",
    name: "selectone",
    choices: ["addition", "subtraction", "multiplication", "division"],
  },
]);

if (answer.selectone === "addition") {
  console.log(answer.firstnumber + answer.secondnumber);
} else if (answer.selectone === "subtraction") {
  console.log(answer.firstnumber - answer.secondnumber);
} else if (answer.selectone === "multiplication") {
  console.log(answer.firstnumber * answer.secondnumber);
} else if (answer.selectone === "division") {
  console.log(answer.firstnumber / answer.secondnumber);
} else {
  console.log("select the valid option!");
}

console.log();
