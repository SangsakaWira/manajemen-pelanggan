const {
  Sequelize,
  DataTypes
} = require('sequelize');
const sequelize = require("../config/database")

const Pelanggan = sequelize.define('User', {

  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nama: {
    type: DataTypes.STRING
  },
  alamat: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  dompet: {
    type: DataTypes.INTEGER
  }
}, {
  // Other model options go here
});

exports.module = Pelanggan