const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
  }
);

/* try {
  sequelize.authenticate();
  console.log("Conectamos com sucesso via Sequelize");
} catch (error) {
  console.log("Não foi possível conectar");
} */

module.exports = sequelize;
