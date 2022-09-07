
const express = require("express");
require("./db/connection");

const movieRouter = require("./movie/movieRouter");
const userRouter = require("./users/userRoutes");
const { tokenCheck } = require("./middleware");

const app = express();
const port = process.env.PORT || 3002;

app.use(express.json());
app.use(movieRouter);
app.use(userRouter);

app.get("/", tokenCheck, (req, res) => {
  res.status(200).send({ message: "You should only see if this if you are logged in" });
});

app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});