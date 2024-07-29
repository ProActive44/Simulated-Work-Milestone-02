const express = require('express')
const { userController } = require("../controllers/userController.js")

const userRoute = express.Router();


userRoute.use("/register", userController);

module.exports = userRoute;
