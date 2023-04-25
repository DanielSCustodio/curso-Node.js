const express = require("express");
const exphbs = require("express-handlebars");
require("custom-env").env("development.local");
const conn = require("./db/conn");

const app = express();

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");
app.use(express.static("public"));
app.use(
  //capturar o body
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json()); //capturar o body


app.get("/", (req, res) => {
  res.render("home");
});


app.listen(3000, () => {
  console.log("Aplicação em execução");
});
