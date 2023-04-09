const { log } = require("console");
const exp = require("constants");
const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

//ler body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const basePath = path.join(__dirname, "templates");

app.get("/users/add", (req, res) => {
  res.sendFile(`${basePath}/userform.html`);
});

app.post("/users/save", (req, res) => {
  const name = req.body.name;
  const age = req.body.age;

  log(`Nome do usuário: ${name}. idade do usuário: ${age}`);
  res.sendFile(`${basePath}/userform.html`);
});

app.get("/", (req, res) => {
  res.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => {
  console.log(`Rodando na porta:${port}`);
});
