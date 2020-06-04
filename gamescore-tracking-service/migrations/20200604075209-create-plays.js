'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('plays', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      users_id: {
        type: Sequelize.INTEGER
      },
      games_id: {
        type: Sequelize.INTEGER
      },
      score: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.CHAR
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('plays');
  }
};