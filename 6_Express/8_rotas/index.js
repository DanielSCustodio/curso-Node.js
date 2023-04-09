const express = require("express");
const app = express();
const path = require("path");
const port = 3000;
const usersRouter = require("./users")

//ler body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const basePath = path.join(__dirname, "templates");

app.use("/users", usersRouter);

app.get("/", (req, res) => {
  res.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => {
  console.log(`Rodando na porta:${port}`);
});
