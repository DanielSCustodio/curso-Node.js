const express = require("express");
const exphbs = require("express-handlebars");

const app = express();
const hbs = exphbs.create({
  partialsDir: ["views/partials"],
});
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.use(express.static("public"))

app.get("/posts", (req, res) => {
  const post = {
    title: "Como criar um objeto em JavaScript",
    content: "Neste post, vamos mostrar como criar um objeto em JavaScript.",
    author: "João Silva",
    date: "2023-04-16",
  };

  res.render("blogpost", { post });
});

app.get("/blog", (req, res) => {
  const posts = [
    {
      title: "Como criar um objeto em JavaScript",
      content: "Neste post, vamos mostrar como criar um objeto em JavaScript.",
      author: "João Silva",
      date: "2023-04-16",
    },
    {
      title: "Como fazer um loop em um array",
      content:
        "Neste post, vamos mostrar como fazer um loop em um array em JavaScript.",
      author: "Maria Souza",
      date: "2023-04-15",
    },
    {
      title: "Como usar funções em JavaScript",
      content: "Neste post, vamos mostrar como usar funções em JavaScript.",
      author: "Pedro Alves",
      date: "2023-04-14",
    },
    
  ];

  res.render("blog", {posts});
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
