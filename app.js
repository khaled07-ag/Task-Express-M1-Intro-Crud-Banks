const express = require("express");
const app = express();
const accounts = require("./accounts");
const accountsRouter = require("./apis/accounts.routes")
app.use(express.json());
app.use("/api",accountsRouter);

app.listen(8000, () => {
  console.log("first");
});
