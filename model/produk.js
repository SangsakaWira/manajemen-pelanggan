const {
    Sequelize,
    DataTypes
  } = require('sequelize');
  const sequelize = require("../config/database")
  
  const Produk = sequelize.define('Produk', {
  
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING
    },
    price: {
      type: DataTypes.STRING
    },
    image: {
      type: DataTypes.STRING
    }
  }, {
    // Other model options go here
  });
  
  exports.module = Produk