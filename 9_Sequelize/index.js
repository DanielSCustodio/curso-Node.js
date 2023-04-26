const express = require("express");
const exphbs = require("express-handlebars");
require("custom-env").env("development.local");
const conn = require("./db/conn");

const User = require("./models/User");

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

app.get("/users/create", (req, res) => {
  res.render("adduser");
});

app.post("/users/create", async (req, res) => {
  const { name, occupation } = req.body;
  let { newsletter } = req.body;

  if (newsletter === "on") {
    newsletter = true;
  }else{
    newsletter = false;
  }

  await User.create({ name, occupation, newsletter });

  res.redirect("/");
});

app.get("/", async (req, res) => {
  const users = await User.findAll({raw:true})
  console.log(users);
  res.render("home", {users});
});

conn
  .sync()
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => console.log(`Ocorreu um erro: ${err}`));
