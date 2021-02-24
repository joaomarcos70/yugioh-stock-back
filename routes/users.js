var express = require('express');
var router = express.Router();

//POST users
router.post('/', function(req, res, next){
  res.send(req.body)
})


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


module.exports = router;
