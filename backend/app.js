const sequelize = require('./config/db.js')
const express = require('express')
const bodyParser = require('body-parser')
const userRoute = require("./routes/userRoutes.js")

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));


app.use("/api/users", userRoute);


let PORT = process.env.PORT || 5000
const server = app.listen(PORT, ()=>{
  console.log(`Server is running on ${PORT}`);
})

module.exports = {app, server}