const express = require("express")
const app = express()
const path = require("path")
const port = 3000

const basePath = path.join(__dirname, 'templates')

//arquivos estáticos
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(`${basePath}/index.html`)
})

app.listen(port, ()=>{
  console.log(`Rodando na porta:${port}`);
})