const app = require("../index");
const syncDb = require("./sync-db");

syncDb().then(_ => {
  console.log("Sync Database!");

  const port = 3000;
  app.listen(port, () => {
    console.log(`App is listening on port ${port}!`);
  });
});
