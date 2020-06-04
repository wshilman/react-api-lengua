'use strict';
module.exports = (sequelize, DataTypes) => {
  const plays = sequelize.define('plays', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    users_id: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    games_id: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    score: {
      allowNull: false,
      defaultValue: 0,
      type: DataTypes.INTEGER
    },
    status: {
      allowNull: true,
      defaultValue: 1,
      type: DataTypes.CHAR
    }
  }, {
    timestamps:false,
    freezeTableName: true,
    tableName: 'plays',
    classMethods: {}
  });
  plays.associate = function(models) {
    // associations can be defined here
    plays.belongsTo(models.users,
      {
        as: 'users',
        foreignKey: 'users_id',
      }
    );
    plays.belongsTo(models.games,
      {
        as: 'games',
        foreignKey: 'games_id',
      }
    );
  };
  return plays;
};