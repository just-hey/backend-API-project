const fs = require('fs');
const format = 'utf8'
const dbPath = __dirname + '/../database/accountsFile.json'

function getAccount() {
  return JSON.parse(fs.readFileSync(dbPath, format))
}

function getByID(id) {
  let accountList = JSON.parse(fs.readFileSync(dbPath, format))
  for (var i = 0; i < accountList.length; i++) {
    if (accountList[i].ID == id) {
      return accountList[i]
    }
  }
  // If didn't find matching ID, return null
  return null
}

function createAccount() {
  //write to file with specified info

}

function updateAccount(id) {
  //write to file with specified ID/info
}

function deleteAccount(id) {
  //write to file to remove specified ID
  //if req.ID == ID in file
    //.splice(i, 1)
  let accountList = JSON.parse(fs.readFileSync(dbPath, format))
  for (var i = 0; i < accountList.length; i++) {
    if (accountList[i].ID == id) {
      return accountList.splice(accountList[i], 1)
    }
  }
  // If didn't find matching ID, return null
  return null
}

function getTransactions(id) {
  //show all transactions from specified account
}

function getATransaction(id) {
  //show one transaction from specified account
}

function createTransaction(id) {
  //create new transaction for specified account
}

function updateTransaction(id) {
  //update transaction for specified account
}

function deleteTransaction(id) {
  //delete specified transaction for specified account
}

module.exports = {getAccount, getByID, createAccount, updateAccount, deleteAccount, getTransactions, getATransaction, createTransaction, updateTransaction, deleteTransaction}
