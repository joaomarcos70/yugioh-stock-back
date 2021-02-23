const express = require("express");
const app = express();
const port = 3000

const bodyParser = require("body-parser");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.use("/", indexRouter);
app.use("/users", usersRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
