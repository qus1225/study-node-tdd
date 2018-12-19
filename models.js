const Sequelize = require("sequelize");
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./db.sqlite"
});

const User = sequelize.define("User", {
  // Id는 자동생성
  name: Sequelize.STRING
});

module.exports = { Sequelize, sequelize, User };
