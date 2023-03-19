const fs = require("fs")

fs.stat('arquivo.txt', (err, stats)=>{
  if(err){
    console.log(err);
    return
  }
  console.log(`É um arquivo? ${stats.isFile()}`)
  console.log(`É um diretório? ${stats.isDirectory()}`)
  console.log(`É um link simbólico? ${stats.isSymbolicLink()}`)
  console.log(`Criado em: ${stats.ctime}`)
  console.log(`Tamanho: ${stats.size}kb`)
})