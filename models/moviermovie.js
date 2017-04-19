'use strict';
module.exports = function(sequelize, DataTypes) {
  var MovierMovie = sequelize.define('MovierMovie', {
    movier_id: DataTypes.INTEGER,
    movie_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        MovierMovie.belongsTo(models.Movier, {foreignKey: 'movier_id'});
        MovierMovie.belongsTo(models.Movie, {foreignKey: 'movie_id'});
      }
    }
  });
  return MovierMovie;
};