const express = require("express");
const auth = require("../middleware/auth");
const userController = require("../controllers/userController");
const homeRouter = express.Router();

userRouter.get("/", auth, userController.getuser);

module.exports = userRouter;
