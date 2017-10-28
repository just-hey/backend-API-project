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
}

function getTransactions() {
  //
}

function getATransaction() {
  //
}

function createTransaction() {

}

function updateTransaction() {

}

function deleteTransaction() {

}

module.exports = {getAccount, getByID, createAccount, updateAccount, deleteAccount, getTransactions, getATransaction, createTransaction, updateTransaction, deleteTransaction}
