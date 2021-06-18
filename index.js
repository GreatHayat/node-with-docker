const express = require("express");
const cors = require("cors");
const app = express();
const setContentHeader = require("./middlewares/contentHeader");
const users = require("./routes/users");

app.use(express.json());
app.use(cors());
app.options("*", cors());
app.use(setContentHeader);
app.use("/api/users", users);

app.get("/users", (req, res) => {
  // process.env.PING, PING is coming from the docker env variables
  /*res.send({
    //message: "This app is running inside a docker contaienr",
    //ping: process.env.PING,
    users,
  });*/

  res.send(users);
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`App is listining on port ${port}`));
