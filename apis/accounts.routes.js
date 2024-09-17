const express = require("express");
const { getAllAccounts, createAccount, deleteAccount, updateAccount, getOneAccount } = require("./accounts.controller");
const accountsRouter = express.Router();
const accounts = require("../accounts");
accountsRouter.get("/accounts", getAllAccounts);

  accountsRouter.post("/create", createAccount);

  accountsRouter.delete("/delete/:id", deleteAccount)

  accountsRouter.put("/update/:id", updateAccount)
  
  accountsRouter.get("/account/:id", getOneAccount)

module.exports = accountsRouter;