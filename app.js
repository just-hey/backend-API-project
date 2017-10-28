const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const morgan = require('morgan');
const accounts = require('./middleWare/accounts')

//READ all accounts
app.get('/accounts', accounts.getAccount)

//READ an account
app.get('/accounts/:id', accounts.getByID)

//CREATE an account
app.post('/accounts', accounts.createAccount)

//UPDATE an account
app.put('/accounts/:id', accounts.updateAccount)

//DELETE an account
app.delete('/accounts/:id', accounts.deleteAccount)


//READ all transactions from account
app.get('/accounts/:id/transactions', accounts.getTransactions)

//READ a transaction from account
app.get('/accounts/:id/transactions/:transactionID', accounts.getATransaction)

//CREATE a transaction for an account
app.post('/accounts/:id/transactions', accounts.createTransaction)

//UPDATE a transaction for an account
app.put('/accounts/:id/transactions/:transactionID', accounts.updateTransaction)

//DELETE a transaction for an account
app.delete('/accounts/:id/transactions/:transactionID', accounts.deleteTransaction)


app.listen(port)
