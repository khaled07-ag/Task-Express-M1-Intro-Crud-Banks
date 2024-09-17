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
app.delete("/delete/:id",(req,res)=>{
  const {id} = req.params;
  const updatedAcc = accounts.filter((account)=>{
    if(account.id != id){
      return true;
    }
    
  })
  return res.status(200).json({data: updatedAcc});
})
app.put("/update/:id",(req,res)=>{
  const {id} = req.params;
  const accFound = accounts.find((accounts)=>{
    if(accounts.id == id){
      return true;
    }
  })
  
})
app.listen(8000, () => {
  console.log("first");
});
