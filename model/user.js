const {
    DataTypes
  } = require('sequelize');
  const sequelize = require("../config/database")
  
  const User = sequelize.define('user', {
  
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    }
  }, {
    // Other model options go here
    tableName:"users",
    createdAt:false,
    updatedAt:false
  });
  
  module.exports = User