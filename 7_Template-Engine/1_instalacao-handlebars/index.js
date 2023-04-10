const express = require("express")
const exphbs = require("express-handlebars")

const app = express()
app.engine('handlebars', exphbs.engine())
app.set("view engine", "handlebars")

app.get("/", (req, res)=>{

  const word = "Palavra"

  const user ={
    name: "Daniel",
    surname: "Custódio"
  }
  res.render("home", {data: user, word})
})

app.listen(3000, ()=> {
  console.log("Aplicação está sendo executada");
})