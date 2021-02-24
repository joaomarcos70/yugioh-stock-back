const connection = require("../database/connection");
const { createUsers } = require("../database/tables");
const router = require("../routes");

class Users {
  constructor(user, res) {
    const query = "INSERT INTO users SET ?";

    createUsers(user.name, user.email, user.password, user.nick, (error) => {
      if (error) {
        res.status(400).json(error);
      } else {
        const newUser = {
          name: user.name,
          email: user.email,
          password: user.password,
          nick: user.nick,
        };
        if (error) {
          console.log(error);
          res.status(400).json(error);
        } else {
          res.status(200).json(newUser);
        }
      }
    });
  }
}

module.exports = new Users();