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
  req.query.limit = req.query.limit || 10;
  const limit = parseInt(req.query.limit, 10);
  if (Number.isNaN(limit)) {
    // response할때는 return으로 끝나는게 아니라 end()를 콜해야줘야함
    return res.status(400).end();
  }
  res.json(users.slice(0, limit));
});

app.listen(3000, () => {
  console.log("App is listening on port 3000!");
});

module.exports = app;
