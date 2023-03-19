const path = require("path")

// path absoluto
console.log(`Path absoluto: ${path.resolve('arquivo.txt')}`);

// formação do path
const midFolder = "relatorios"
const fileName = "aqruivo.txt"

const finalPathName = path.join("/","arquivos", midFolder, fileName)

console.log(`Formação path: ${finalPathName}`)
