const models = require("../models");

module.exports = () => {
  // sequlize.sync는 promise를 리턴
  return models.sequelize.sync({ force: true });
};
