const express = require("express");
const exphbs = require("express-handlebars");

const app = express();
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.get("/posts", (req, res) => {
  const posts = {
    title: "Como criar um objeto em JavaScript",
    content: "Neste post, vamos mostrar como criar um objeto em JavaScript.",
    author: "João Silva",
    date: "2023-04-16",
  };

  res.render("blogpost", { posts });
});

app.get("/dashboard", (req, res) => {
  const frutas = ["maçã", "banana", "laranja", "manga"];

  res.render("dashboard", { frutas });
});

app.get("/", (req, res) => {
  const word = "Palavra";
  const auth = true;
  const approved = false;

  const user = {
    name: "Daniel",
    surname: "Custódio",
  };
  res.render("home", { user, word, auth, approved });
});

app.listen(3000, () => {
  console.log("Aplicação está sendo executada");
});
