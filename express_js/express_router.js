/*
  The router.use() function uses the specified middleware function or functions. It basically mounts middleware for the routes which are being served by the specific router.
    
  When var app = express() is called, an app object is returned. Think of this as the main app.
  When var router = express.Router() is called, a slightly different mini app is returned. The idea behind the mini app is that each route in your app can become quite complicated, and you'd benefit from moving all that code into a separate file. Each file's router becomes a mini app, which has a very similar structure to the main app.
 */

const express = require('express')

const router = express.Router();

