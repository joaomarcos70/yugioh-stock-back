const { Router } = require("express");
const express = require("express");
const { listById } = require("../models/users");
const users = require("../models/users");
const router = express.Router();

//POST users
router.post("/create", function (req, res, next) {
  users.createUsers(req.body, res);
});

/* GET users listing. */
router.get("/list", function (req, res, next) {
  users.listUsers(res);
});
//GET users listening user
router.get("/list/:id", (req, res) => {
  const id = parseInt(req.params.id);
  users.listById(id, res);
});
//PATCH users alter user
router.patch("/edit/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const fields = req.body;

  users.alterUser(id, fields, res);
});

//DELETE users
router.delete("/delete/:id", (req, res) => {
  const id = parseInt(req.params.id);
  users.deleteUser(id, res);
});

module.exports = router;
