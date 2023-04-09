const express = require("express")
const path = require("path");
const router = express.Router()

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

const basePath = path.join(__dirname, "../templates");

router.get("/add", (req, res) => {
  res.sendFile(`${basePath}/userform.html`);
});

router.post("/save", (req, res) => {
  const name = req.body.name;
  const age = req.body.age;

  console.log(`Nome do usuário: ${name}. idade do usuário: ${age}`);
  res.sendFile(`${basePath}/userform.html`);
});

router.get("/", (req, res) => {
  res.sendFile(`${basePath}/index.html`);
});

module.exports = router
