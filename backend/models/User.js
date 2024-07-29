const { DataTypes }  = require('sequelize')
const sequelize = require('../config/db')

const User = sequelize.define("User", {
  username : {
    type : DataTypes.STRING,
    allowNull : false,
    unique : true
  },
  email : {
    type : DataTypes.STRING,
    allowNull : false,
    unique : true
  },
  fullname : {
    type : DataTypes.STRING,
    allowNull : false
  },
  password : {
    type : DataTypes.STRING,
    allowNull : false
  }
})

module.exports = User