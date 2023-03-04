const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(
  "Qual sua linguagem de programação preferida? \n",
  (language) => {
    if (language.toLocaleLowerCase() === "javascript") {
      console.log(`A sua linguagem preferida é: ${language}!`);
    } else {
      console.log(`${language}? Tá vivendo errado!`);
    }
    readline.close();
  }
);
