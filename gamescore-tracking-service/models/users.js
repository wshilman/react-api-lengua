'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    username: {
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
    tableName: 'users',
    classMethods: {}
  });
  users.associate = function(models) {
    // associations can be defined here
  };
  return users;
};