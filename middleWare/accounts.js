const accountLib = require('../lib/accounts')

function getAccount (req, res, next) {
  try {
    let accounts = accountLib.getAccount()
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
      return res.status(404).json({message: `Error: Did not find account with ID: ${accountID}`})
    } else {
      return res.status(200).json(account)
    }
  } catch (error) {
    console.log(error)
    return res.status(500).json({message: 'Error: Server failed... :/'})
  }
}

//create new account
function createAccount (req, res, next) {
  try {
    //creates new account aslong as 'name', 'bankName', 'ID', and 'Description' are provided
    let personName = req.body.name
    let bankName = req.body.bankName
    let accountID = req.body.accID
    let accountDesc = req.body.desc

    if (!personName || !bankName || !accountID || !accountDesc) {
      return res.status(400).json({message: 'Be sure to include: Name, Bank Name, ID, and a Description.'})
    } else {


      return res.status(200).json(account)

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
    let accountID = req.params.id
    let account = accountLib.getByID(accountID)
    if (!account) {
      return res.status(404).json({message: `Error: Did not find account with ID: ${accountID}`})
    } else {
      //If it gets into this else: need to find in the .json file and remove it from the array.
      return res.status(200).json({message: `Account with ID: ${accountID} has been deleted.`})
    }
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
