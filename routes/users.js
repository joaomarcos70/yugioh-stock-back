const express = require('express');
const users = require('../models/users');
const router = express.Router();

//POST users
router.post('/create', function(req, res, next){
  users.createUsers(req.body, res)
})


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


module.exports = router;
