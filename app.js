const express = require("express");
const app = express();
const accounts = require("./accounts");
app.use(express.json());

app.get("/accounts", (req, res) => {
  res.status(200).json(accounts);
});
app.post("/create", (req, res) => {
  const newAcc = {
    id: req.body.id,
    username: req.body.username,
    funds: req.body.funds,
  };
  accounts.push(newAcc);
  res.status(201).json({
    message: "Account Added!",
    data: accounts,
  });
});
app.listen(8000, () => {
  console.log("first");
});
