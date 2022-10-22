const {
    Sequelize,
    DataTypes
  } = require('sequelize');
  const sequelize = require("../config/database")
  
  const Transaksi = sequelize.define('Transaksi', {
  
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
    bukti: {
      type: DataTypes.STRING
    }
  }, {
    // Other model options go here
  });
  
  exports.module = Transaksi