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

  listUsers(res) {
    const sql = `SELECT * FROM users`;

    connection.query(sql, (error, list) => {
      if (error) {
        console.log(error)
        res.status(400).json(error);
      } else {
        console.log(list)
        res.status(200).json(list);
      }
    });
  }
}

module.exports = new Users();
