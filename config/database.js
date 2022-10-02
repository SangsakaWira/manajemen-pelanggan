const {
    Sequelize
} = require('sequelize');

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('ecommerce', 'yomama', 'x71hjkauiAjakLjjkb', {
    host: '13.215.253.155',
    port: 5433,
    dialect: 'postgres'
});

module.exports = sequelize