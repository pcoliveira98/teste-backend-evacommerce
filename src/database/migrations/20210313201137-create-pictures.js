'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('images', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      path: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      product_id: {
        type: Sequelize.INTEGER,
        references: { model: 'products', key: 'id' },
        onDelete: 'CASCADE',
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('images');
  }
};
