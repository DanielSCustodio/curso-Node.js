const mongoose = require("mongoose");

async function main() {
  await mongoose.connect("mongodb://localhost:27017/mongoose");
  console.log("Conectado ao banco.");
}

main().catch((err) => console.log(err));

module.exports = mongoose;
