class Tables {
  init(connection) {
    this.connection = connection;
    this.createUsers();
  }

  createUsers() {
    const sql = `CREATE TABLE  IF NOT EXISTS users (id INT NOT NULL AUTO_INCREMENT,
            name VARCHAR(50) NOT NULL, email VARCHAR(50) NOT NULL, password VARCHAR(30) NOT NULL,
            nick VARCHAR(50), primary key(id))`;

    /*connection.query(sql, (error) => {
      if (error) {
        console.log(error);
      } else {
        console.log("tabela criada com sucesso");
      }
    });*/
  }
}

module.exports = new Tables();