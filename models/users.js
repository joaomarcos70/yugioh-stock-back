const connection = require("../database/connection");
const { createUsers } = require("../database/tables");

class Users {
  createUsers(user, res) {
    const query = "INSERT INTO users SET ?";
    const newUser = {
      name: user.name,
      email: user.email,
      password: user.password,
      nick: user.nick,
    };

    connection.query(query, newUser, (erro) => {
      if (erro) {
        console.log(erro);
        res.status(400).json(erro);
      } else {
        res.status(200).json(newUser);
      }
    });
  }
}

module.exports = new Users();
