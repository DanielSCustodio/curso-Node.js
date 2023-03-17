const fs = require('fs')

const currentValue = 'arquivo.txt'
const newValue = 'novoArquivo.txt'

fs.rename(currentValue, newValue, (err)=>{
  if(err){
    console.log(`Deu merda --> ${err}`);
    return
  }else{
    console.log(`o Arquivo "${currentValue}" foi renomeado para "${newValue}".`);
  }
})