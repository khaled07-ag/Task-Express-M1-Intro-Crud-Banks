const accounts = require("../accounts");

const getAllAccounts = (req, res) => {
    res.status(200).json(accounts);
  };

const createAccount = (req, res) => {
    let newId = accounts[accounts.length-1].id + 1;
    const newAcc = {
      id: newId,
      ...req.body,
    };
    accounts.push(newAcc);
    res.status(201).json({
      message: "Account Added!",
      data: accounts,
    });
  };
  const deleteAccount = (req,res)=>{
    const {id} = req.params;
    const updatedAcc = accounts.filter((account)=>{
      if(account.id != id){
        return true;
      }
      
    })
    return res.status(200).json({data: updatedAcc});
  };
  const updateAccount = (req,res)=>{
    const {id} = req.params;
  
    const accFound = accounts.find((accounts)=>{
      if(accounts.id == id){
        return true;
      }
    })
  
    accFound.funds = req.body.funds;
  
    return res.json({data : accFound});
  };
  const getOneAccount = (req,res)=>{
    const {id} = req.params;
    const accFound = accounts.find((accounts)=>{
      if(accounts.id == id){
        return true;
      }
    })
    return res.status(200).json({data: accFound})
  };
  module.exports = {
    getAllAccounts,
    createAccount,
    deleteAccount,
    updateAccount,
    getOneAccount,
  }