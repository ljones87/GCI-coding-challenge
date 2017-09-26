const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost/GCI')

module.exports = db;
