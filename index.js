const exprses = require("express");
const app = exprses();
const morgan = require("morgan");

const users = [
  { id: 1, name: "alice" },
  { id: 2, name: "bek" },
  { id: 3, name: "chris" }
];

app.use(morgan("dev"));

app.get("/users", function(req, res) {
  res.json(users);
});

app.listen(3000, () => {
  console.log("App is listening on port 3000!");
});

module.exports = app;
