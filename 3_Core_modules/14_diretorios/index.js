const fs = require("fs")

if(!fs.existsSync("./folder")){
  fs.mkdirSync("./folder");
  console.log("Não existe");
}else if (!fs.existsSync("./folder")) {
  console.log("Não existe");
}else{
  console.log("Existe sim");
}