const fs = require('fs');

console.log('Início');

fs.writeFile('async.txt', 'Este é um arquivo assíncrono',  (err)=>{
  setTimeout( ()=>{
    console.log('Arquivo criado!');
  },2000)
});

console.log('Fim');