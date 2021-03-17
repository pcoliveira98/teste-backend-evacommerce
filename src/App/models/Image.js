const { DataTypes } = require('sequelize');

const database = require('../../database/index');


const Image = database.define('Image', {
    name: DataTypes.STRING,
    path: DataTypes.STRING,
    url: {
        type: DataTypes.VIRTUAL,
        get() {
            return `${process.env.APP_URL}:${process.env.APP_PORT}/images/${this.path}`;
        },
    }
});

module.exports = Image;