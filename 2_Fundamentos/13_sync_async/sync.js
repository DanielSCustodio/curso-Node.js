const fs = require('fs');

console.log('Início');

fs.writeFileSync('arquivo.txt', 'Este é um código sincrono');

console.log('Fim');