const express = require("express");
const exphbs = require("express-handlebars");
const conn = require("./db/connection");
require("custom-env").env("development.local");

const app = express();
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");
app.use(express.static("public"));

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.listen(process.env.PORT, () => {
  console.log(`Aplicação em execução na porta ${process.env.PORT}`);
});
