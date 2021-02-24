const express = require('express');
const users = require('../models/users');
const router = express.Router();

//POST users
router.post('/create', function(req, res, next){
  users.createUsers(req.body, res)
})

/* GET users listing. */
router.get('/list', function(req, res, next) {
users.listUsers(res)
});


module.exports = router;
