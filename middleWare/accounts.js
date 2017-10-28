const accountLib = require('../lib/accounts')

function getAccount (req, res, next) {
  try {
    let accounts = accountLib.get()
    return res.status(200).json(accounts)
  } catch (error) {
    console.log(error)
    return res.status(500).json({message: 'Error: Could not retrieve accounts.'})
  }
}

function getByID (req, res, next) {
  try {
    let accountID = req.params.id
    let account = accountLib.getByID(accountID)
    if (!account) {
      return res.status(404).json({message: `Error: Did not find account for ID: ${accountID}`})
    } else {
      return res.status(200).json(account)
    }
  } catch (error) {
    console.log(error)
    return res.status(500).json({message: 'Error: Server failed... :/'})
  }
}

function createAccount (req, res, next) {
  try {
    //creates new account with
    if (!req.body.name || !req.body.bankName) {
      return res.status(400).json({message: 'Be sure to include: Name and Bank Name'})
    } else {
      let personName = req.body.name
      let bankName = req.body.bankName
      let accountID = 0

    }
  } catch (error) {
    console.log(error)
    return res.status(500).json({message: 'Error: Could not create account'})
  }
}

function updateAccount (req, res, next) {
  try {
    //update account if id matches
  } catch (error) {
    console.log(error)
    return res.status(500).json({message: 'Error: Could not update account'})
  }
}

function deleteAccount (req, res, next) {
  try {
    //delete account if ID matches
  } catch (e) {
    console.log(error)
    return res.status(500).json({message: 'Error: Could not delete account'})
  }
}

function getTransactions (req, res, next) {
  try {
    //show all transactions from account if ID matches
  } catch (e) {
    console.log(error)
    return res.status(500).json({message: 'Error: Could not find account'})
  }
}

function getATransaction (req, res, next) {
  try {
    //show a transaction from account if IDs match
  } catch (e) {
    console.log(error)
    return res.status(500).json({message: 'Error: Could not find that transaction'})
  }
}

function createTransaction (req, res, next) {
  try {
    //make a transaction for account if IDs match
  } catch (e) {
    console.log(error)
    return res.status(500).json({message: 'Error: Could not create that transaction'})
  }
}

function updateTransaction (req, res, next) {
  try {
    //update a transaction from an account if IDs match
  } catch (e) {
    console.log(error)
    return res.status(500).json({message: 'Error: Could not update that transaction'})
  }
}

function deleteTransaction (req, res, next) {
  try {
    //delete a transaction from an account if IDs match
  } catch (e) {
    console.log(error)
    return res.status(500).json({message: 'Error: Could not delete that transaction'})
  }
}

module.exports = {getAccount, getByID, createAccount, updateAccount, deleteAccount, getTransactions, getATransaction, createTransaction, updateTransaction, deleteTransaction}
