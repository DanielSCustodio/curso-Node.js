const express = require("express");
const exphbs = require("express-handlebars");
require("custom-env").env("development.local");
const conn = require("./db/conn");

const User = require("./models/User");
const Address = require("./models/Address");

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
  console.log(newsletter);

  if (newsletter === "on") {
    newsletter = true;
  } else {
    newsletter = false;
  }
  await User.create({ name, occupation, newsletter });
  res.redirect("/");
});

app.get("/users/:id", async (req, res) => {
  const { id } = req.params;
  const user = await User.findOne({ raw: true, where: { id: id } });
  res.render("userview", { user });
});

app.post("/users/delete/:id", async (req, res) => {
  const { id } = req.params;
  await User.destroy({ where: { id: id } });
  res.redirect("/");
});

app.get("/users/edit/:id", async (req, res) => {
  const { id } = req.params;
  const user = await User.findOne({ include: Address, where: { id: id } });
  res.render("useredit", { user: user.get({ plain: true }) });
});

app.post("/users/update", async (req, res) => {
  const { id, name, occupation } = req.body;
  let { newsletter } = req.body;
  if (newsletter === "on") {
    newsletter = true;
  } else {
    newsletter = false;
  }
  const userData = { id, name, occupation, newsletter };
  await User.update(userData, { where: { id: id } });
  res.redirect("/");
});

app.post("/address/create", async (req, res) => {
  const { UserId, street, number, city } = req.body;
  const address = { UserId, street, number, city };
  await Address.create(address);
  res.redirect(`/users/edit/${UserId}`);
});

app.post("/address/delete", async (req, res) => {
  const { id, UserId } = req.body;
  await Address.destroy({
    where: { id: id },
  });
  res.redirect(`/users/edit/${UserId}`);
});

app.get("/", async (req, res) => {
  const users = await User.findAll({ raw: true });
  res.render("home", { users });
});

conn
  .sync()
  //.sync({force:true})
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => console.log(`Ocorreu um erro: ${err}`));
