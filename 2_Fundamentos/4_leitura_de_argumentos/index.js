// nome=daniel
// node index.js nome=daniel idade=33

const args = process.argv.slice(2);
const name = args[0].split('=')
const idade = args[1].split("=");

const nameValue = name[1]
const idadeValue = idade[1];

console.log(`Meu nome é ${nameValue}, tenho ${idadeValue} anos.`);

