'use strict';
const serv =require('./src/server.js')
// Start up DB Server
require('dotenv').config()
const  port=process.env.PORT
const mongoose = require('mongoose');
const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};
mongoose.connect(process.env.MONGODB_URI, options);

// Start the web server

serv.startup(port||3000);
