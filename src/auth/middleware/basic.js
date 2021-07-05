'use strict';

const base64 = require('base-64');
const User = require('../models/users.js');

module.exports = async (req, res, next) => {
//no req.header
  if (!req.headers.authorization) { return _authError(); }

  let basic = req.headers.authorization.split(' ');
  console.log(basic)
  let encodedString = basic.pop(); 
  let decodedString = base64.decode(encodedString); // sdkjdsljd=

  //Req.header user pass , bydefaultencoded so we will be decoded it to have the correct data
  let [user, pass] =  decodedString.split(':');
console.log(pass)
  try {
    req.user = await User.authenticateBasic(user, pass)

    console.log(req.user)
    next();
  } catch (e) {
    res.status(403).send('Invalid Login');
  }

}

