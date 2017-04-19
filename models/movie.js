'use strict';
module.exports = function(sequelize, DataTypes) {
  var Movie = sequelize.define('Movie', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    rating: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Movie.belongsToMany(models.Movier, {through: models.MovierMovie, foreignKey: 'movie_id'});
      }
    },
    hooks: {
      beforeCreate: function(movie, options) {
        movie.rating = 0;
      }
    }
  });
  return Movie;
};