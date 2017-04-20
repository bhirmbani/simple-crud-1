'use strict';
module.exports = function(sequelize, DataTypes) {
  var Movier = sequelize.define('Movier', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    image_url: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Movier.hasMany(models.Movie,{foreignKey: 'movier_id'});
      }
    }
  });
  return Movier;
};