const express = require("express");
const exphbs = require("express-handlebars");
const conn = require("./db/connection");
require("custom-env").env("development.local");

const Task = require("./models/TaskModel");
const tasksRoutes = require("./routes/tasksRoutes");

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

app.use("/tasks", tasksRoutes);

conn
  .sync()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Aplicação em execução");
    });
  })
  .catch((err) =>
    console.log("Ocorreu um erro ao conectar com o banco de dados: ", err)
  );
