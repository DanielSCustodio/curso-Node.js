const express = require("express")
const exphbs = require("express-handlebars")

const app = express()
app.engine('handlebars', exphbs.engine())
app.set("view engine", "handlebars")

app.get("/dashboard", (req, res) => {
  const frutas = ["maçã", "banana", "laranja", "manga"];

  res.render("dashboard", {frutas});
});

app.get("/", (req, res)=>{

  const word = "Palavra"
  const auth = true
  const approved = false

  const user ={
    name: "Daniel",
    surname: "Custódio"
  }
  res.render("home", { user, word, auth, approved });
})

app.listen(3000, ()=> {
  console.log("Aplicação está sendo executada");
})