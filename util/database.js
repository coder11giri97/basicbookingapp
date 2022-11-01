const Sequelize = require('sequelize');

const sequelize = new Sequelize('bookingdb', 'root', 'apple@17', {
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = sequelize;