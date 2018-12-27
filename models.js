const Sequelize = require("sequelize");
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./db.sqlite",
  logging: false
});

const User = sequelize.define("User", {
  // Id는 자동생성
  name: { type: Sequelize.STRING, unique: true }
});

module.exports = { Sequelize, sequelize, User };
