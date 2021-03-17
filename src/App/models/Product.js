const { DataTypes } = require('sequelize');

const database = require('../../database/index');

const User = require('./User');

const Image = require('./Image');

const Product = database.define('Product', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.FLOAT,
});

Product.belongsTo(User, { foreignKey: 'user_id', as: 'user' });

Product.hasMany(Image, { foreignKey: 'product_id', as: 'images' });

module.exports = Product;