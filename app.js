const express = require("express");
const app = express();
const port = 3000;

const bodyParser = require("body-parser");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

const connection = require("./database/connection");
const Tables = require("./database/tables");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", indexRouter);
app.use("/users", usersRouter);


connection.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    Tables.init(connection);
    
    app.listen(port, () => {
      console.log(`conectado com sucesso`);
      console.log(` http://localhost:${port}`);
    });
  }
});
