const x = 10;

if(!Number.isInteger(x)){
  throw new Error(`O valor "${x}" não é um número inteiro! `)
}

console.log('Continuando a execução!');