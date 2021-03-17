const { DataTypes } = require('sequelize');

const database = require('../../database/index');

const User = database.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password_hash: DataTypes.STRING,
});

module.exports = User;