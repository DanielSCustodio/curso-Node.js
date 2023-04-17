const express = require("express")
const exphbs = require("express-handlebars")
const mysql = require("mysql")
const env = require("custom-env").env("development.local");

const app = express()

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars")
app.use(express.static("public"))

app.get("/", (req, res)=>{
  res.render("home")
})

app.use(            //capturar o body
  express.urlencoded({
    extended: true
  })
)

app.use(express.json())  //capturar o body

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

app.post("/books/insertbook", (req, res)=>{
  const title = req.body.title
  const pageqty = req.body.pageqty

  const sql = `INSERT INTO books (title, pageqty) VALUES ('${title}','${pageqty}')`
  conn.query(sql, (err)=>{
    if(err){
      console.log(err);
    }

    res.redirect("/")
  })

});

conn.connect((err)=>{
  if(err){
    console.log(err);
  }
  console.log("Aplicação conectada ao banco de dados");
  app.listen(3000, ()=>{
    console.log("Aplicação em execução");
  })
})