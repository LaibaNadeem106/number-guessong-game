import inquirer from "inquirer";
const systemGeneratedNo = Math.floor(Math.random() * 10);
const answers = await inquirer.prompt([
    {
        type: "number",
        name: "userGuess",
        message: "Write you Guess b/w  '1 to 10' here:"
    }
]);
const { userGuess } = answers;
console.log(userGuess, "userGuess", systemGeneratedNo, `Sys`);
if (userGuess === systemGeneratedNo) {
    console.log("yup! Your answer is correct \n CONGO!!!! You Win!!!! ");
}
else {
    console.log("Please try again Better luck next time");
}
