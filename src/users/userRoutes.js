
const { Router } = require("express");
const { addUser, login, deleteUser, updateEmail } = require("./userControllers");
const { hashPassword, tokenCheck } = require("../middleware");

const userRouter = Router();

userRouter.post("/user/signup", [hashPassword], addUser);
userRouter.post("/user/login", login);
userRouter.delete("/user/delete", tokenCheck, deleteUser);
userRouter.put("/user/update", tokenCheck, updateEmail);

module.exports = userRouter;