const {
    Sequelize
} = require('sequelize');

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize(process.env.DATABASE, process.env.USERNAME, process.env.PASSWORD, {
    host: process.env.HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres'
});

module.exports = sequelize