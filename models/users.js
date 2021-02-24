const { query, connect } = require("../database/connection");
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
        console.log(error);
        res.status(400).json(error);
      } else {
        res.status(200).json(list);
      }
    });
  }

  listById(id, res) {
    const sql = `SELECT * FROM users WHERE id =${id}`;

    connection.query(sql, (error, results) => {
      const searchById = results[0];
      if (error) {
        res.status(400).json(error);
      } else {
        console.log(searchById);
        res.status(200).json(searchById);
      }
    });
  }

  alterUser(id, fields, res){

    const sql = `UPDATE users SET ? WHERE id = ?`

    connection.query(sql, [fields, id], (error, results)=>{
      if(error){
        res.status(400).json(error)
      }else{
        res.status(200).json(results)
      }
    })
  }
  



}

module.exports = new Users();
