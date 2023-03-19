const path  = require("path")

const customPath = "http://localhost:3000/relatorio/relatorio-semanal.pdf";

console.log(`Nome do diretório: ${path.dirname(customPath)}`);
console.log(`Nome do arquivo: ${path.basename(customPath)}`);
console.log(`Nome da extensão do arquivo: ${path.extname(customPath)}`);