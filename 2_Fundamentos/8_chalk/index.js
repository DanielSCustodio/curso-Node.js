const chalk = require("chalk");
const minimist = require("minimist");
const args = minimist(process.argv.slice(2));

const nota = parseInt(args["nota"]);

if (nota >= 7) {
  console.log(chalk.bgGreen.bold("Você foi aprovado"));
} else {
  console.log(chalk.bgRed.bold("Você precisa estudar mais"));
}
