'use strict';

const users = require('../models/users.js')

module.exports = async (req, res, next) => {

  try {

    if (!req.headers.authorization) { next('Invalid Login') }

    const token = req.headers.authorization.split(' ').pop();
    console.log(token)
    const validUser = await users.authenticateWithToken(token);

    req.user = validUser;
    req.token = validUser.token;
console.log(req)
 next()

  } catch (e) {
    res.status(403).send('Invalid Login');;
  }
}
