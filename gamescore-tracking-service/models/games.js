'use strict';
module.exports = (sequelize, DataTypes) => {
  const games = sequelize.define('games', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    description: {
      allowNull: false,
      type: DataTypes.STRING
    },
    status: {
      allowNull: true,
      defaultValue: 1,
      type: DataTypes.CHAR
    }
  }, {
    timestamps:false,
    freezeTableName: true,
    tableName: 'games',
    classMethods: {}
  });
  games.associate = function(models) {
    // associations can be defined here
  };
  return games;
};