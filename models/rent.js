'use strict';
module.exports = function(sequelize, DataTypes) {
  var Rent = sequelize.define('Rent', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Rent;
};